/* =====================================================================
   media.js — turns the files in a content folder into:
     📷 Photo gallery (click to enlarge)   🎬 Videos (+ YouTube links)
     📄 Documents (view / download)        📊 Slides (PDF or PowerPoint viewer)
   The list of files comes from content/manifest.js, which is rebuilt
   automatically by GitHub every time you push.
   ===================================================================== */
(function () {
  const UI = window.UI;
  const SITE = window.SITE || {};

  /* ---------- Lightbox (shared) ---------- */
  let lb, lbImg, lbCap, lbList = [], lbIdx = 0;
  function ensureLightbox() {
    if (lb) return;
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `
      <button class="lb-close" aria-label="Close">×</button>
      <button class="lb-prev" aria-label="Previous">‹</button>
      <figure><img alt=""><figcaption></figcaption></figure>
      <button class="lb-next" aria-label="Next">›</button>`;
    document.body.appendChild(lb);
    lbImg = lb.querySelector('img'); lbCap = lb.querySelector('figcaption');
    lb.querySelector('.lb-close').onclick = close;
    lb.querySelector('.lb-prev').onclick = () => show(lbIdx - 1);
    lb.querySelector('.lb-next').onclick = () => show(lbIdx + 1);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(lbIdx - 1);
      if (e.key === 'ArrowRight') show(lbIdx + 1);
    });
  }
  function show(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    lbImg.src = lbList[lbIdx].src; lbCap.textContent = lbList[lbIdx].caption;
    const many = lbList.length > 1;
    lb.querySelector('.lb-prev').style.display = many ? '' : 'none';
    lb.querySelector('.lb-next').style.display = many ? '' : 'none';
  }
  function open(list, i) { ensureLightbox(); lbList = list; lb.classList.add('open'); show(i); }
  function close() { lb.classList.remove('open'); }

  /* ---------- helpers ---------- */
  const captionFor = (item, path) => ((item && item.captions) || {})[UI.fileName(path)] || UI.prettyName(path);
  const placeholder = (icon, folder, what) => SITE.showEmptyMediaPlaceholders === false ? null :
    `<div class="placeholder"><span class="big">${icon}</span>${what} will appear here.<br>
      Add files to <code>${UI.esc(folder)}</code></div>`;
  function section(title, icon, count, inner) {
    if (inner == null) return '';
    return `<section class="media-section"><h3>${icon} ${title}${count ? ` <span class="count">(${count})</span>` : ''}</h3>${inner}</section>`;
  }
  const FILE_ICONS = { pdf: '📕', doc: '📘', docx: '📘', xls: '📗', xlsx: '📗', csv: '📗', ppt: '📙', pptx: '📙',
    zip: '🗜️', txt: '📄', md: '📄', ipynb: '📓', stl: '🧊', step: '🧊', stp: '🧊' };
  function youtubeId(url) {
    const m = String(url).match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/);
    return m ? m[1] : null;
  }
  const isLive = () => /^https?:$/.test(location.protocol) && !/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname);

  /* ---------- the sections ---------- */
  function gallery(key, item, images) {
    if (!images.length) return section('Photo Gallery', '📷', 0, placeholder('📷', `content/${key}/images/`, 'Photos'));
    const cards = images.map((src, i) =>
      `<a class="polaroid" href="${UI.esc(src)}" data-i="${i}"><img loading="lazy" src="${UI.esc(src)}" alt="${UI.esc(captionFor(item, src))}">
        <span class="caption">${UI.esc(captionFor(item, src))}</span></a>`).join('');
    return section('Photo Gallery', '📷', images.length, `<div class="polaroid-grid" data-gallery>${cards}</div>`);
  }

  function videos(key, item, files) {
    const yt = (item && item.youtube) || [];
    if (!files.length && !yt.length) return section('Videos', '🎬', 0, placeholder('🎬', `content/${key}/videos/`, 'Videos (or YouTube links in the config file)'));
    const local = files.map(src => `<figure><video controls preload="metadata" src="${UI.esc(src)}"></video>
      <figcaption>${UI.esc(captionFor(item, src))}</figcaption></figure>`);
    const tube = yt.map(v => {
      const url = typeof v === 'string' ? v : v.url, title = typeof v === 'string' ? '' : (v.title || '');
      const id = youtubeId(url);
      return id ? `<figure><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${UI.esc(title || 'YouTube video')}"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>
        ${title ? `<figcaption>${UI.esc(title)}</figcaption>` : ''}</figure>` : '';
    });
    const all = local.concat(tube);
    return section('Videos', '🎬', all.length, `<div class="video-grid">${all.join('')}</div>`);
  }

  function documents(key, item, files) {
    if (!files.length) return section('Documents', '📄', 0, placeholder('📄', `content/${key}/files/`, 'Papers, posters and other files'));
    const cards = files.map(src => {
      const e = UI.ext(src);
      return `<div class="card file-card"><span class="ficon">${FILE_ICONS[e] || '📄'}</span><div>
        <div class="fname">${UI.esc(captionFor(item, src))}</div><div class="fext">${UI.esc(e)} file</div>
        <div class="factions"><a class="btn" href="${UI.esc(src)}" target="_blank" rel="noopener">Open</a>
        <a class="btn" href="${UI.esc(src)}" download>Download</a></div></div></div>`;
    }).join('');
    return section('Documents', '📄', files.length, `<div class="file-list">${cards}</div>`);
  }

  function slides(key, item, files) {
    if (!files.length) return section('Slides', '📊', 0, placeholder('📊', `content/${key}/slides/`, 'Presentations (.pptx or .pdf)'));
    const blocks = files.map(src => {
      const e = UI.ext(src);
      let viewer;
      if (e === 'pdf') {
        viewer = `<iframe src="${UI.esc(src)}#view=FitH" title="${UI.esc(captionFor(item, src))}" loading="lazy"></iframe>`;
      } else if (e === 'ppt' || e === 'pptx') {
        viewer = isLive()
          ? `<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(new URL(src, location.href).href)}" title="${UI.esc(captionFor(item, src))}" loading="lazy" allowfullscreen></iframe>`
          : `<div class="placeholder"><span class="big">📙</span>PowerPoint preview appears once the site is live on GitHub Pages.</div>`;
      } else {
        viewer = `<p class="note">Preview isn't available for .${UI.esc(e)} files. Use the download button.</p>`;
      }
      return `<div class="slide-block"><div class="slide-head"><strong>${UI.esc(captionFor(item, src))}</strong>
        <a class="btn" href="${UI.esc(src)}" download>⬇ Download</a></div>${viewer}</div>`;
    }).join('');
    return section('Slides', '📊', files.length, blocks);
  }

  /** Render all four media sections for content/<key>/ into `el`. */
  function renderAll(el, key, item) {
    const m = UI.media(key);
    el.innerHTML = gallery(key, item, m.images) + videos(key, item, m.videos) + documents(key, item, m.files) + slides(key, item, m.slides);
    wireGalleries(el, item);
  }

  /** Only a small photo strip (used on the Community page). */
  function renderMiniGallery(el, key, item) {
    const imgs = UI.media(key).images;
    if (!imgs.length) { el.innerHTML = ''; return; }
    el.innerHTML = `<div class="mini-gallery" data-gallery>${imgs.map((src, i) =>
      `<a class="polaroid small" href="${UI.esc(src)}" data-i="${i}"><img loading="lazy" src="${UI.esc(src)}" alt="">
       <span class="caption">${UI.esc(captionFor(item, src))}</span></a>`).join('')}</div>`;
    wireGalleries(el, item);
  }

  function wireGalleries(el, item) {
    el.querySelectorAll('[data-gallery]').forEach(g => {
      const list = [...g.querySelectorAll('a')].map(a => ({ src: a.getAttribute('href'), caption: captionFor(item, a.getAttribute('href')) }));
      g.addEventListener('click', e => {
        const a = e.target.closest('a[data-i]'); if (!a) return;
        e.preventDefault(); open(list, +a.dataset.i);
      });
    });
  }

  window.Media = { renderAll, renderMiniGallery, openLightbox: open };
})();
