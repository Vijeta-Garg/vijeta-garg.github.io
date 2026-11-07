/* =====================================================================
   detail-page.js — the "index on the left, details on the right" layout
   used by MY RESEARCH (config/research.js) and MY PROJECTS (config/projects.js).
   ===================================================================== */
(function () {
  const UI = window.UI;
  const kind = document.body.dataset.collection;            // "research" or "projects"
  const data = (kind === 'research' ? window.RESEARCH : window.PROJECTS) || { items: [] };
  const items = data.items || [];
  const root = document.getElementById('app');

  root.innerHTML = `
    <h1 class="page-title">${data.pageTitle || ''}</h1>
    ${data.intro ? `<p class="page-intro">${data.intro}</p>` : ''}
    <div class="split">
      <aside class="side-index"><h2>${data.indexTitle || 'Index'}</h2><ol id="index"></ol></aside>
      <article id="detail"></article>
    </div>`;

  const indexEl = document.getElementById('index');
  const detailEl = document.getElementById('detail');

  indexEl.innerHTML = items.map(it => `<li><a href="#${UI.esc(it.id)}" data-id="${UI.esc(it.id)}">
      ${it.shortTitle || it.title}${it.when ? `<span class="when">${it.when}</span>` : ''}
      ${blogPosts(it).length ? '<span class="blog-flag">↖ on the blog!</span>' : ''}</a></li>`).join('');

  // blog posts linked from an item (config: blog: ["post-file-name", ...])
  function blogPosts(it) {
    const all = window.BLOG_POSTS || [];
    return (it.blog || []).map(s => all.find(p => p.slug === s)).filter(Boolean);
  }
  // handwritten margin note with an arrow, pointing to the related blog posts
  function blogNote(it) {
    const posts = blogPosts(it);
    if (!posts.length) return '';
    return `<aside class="margin-note">
      <svg class="mn-arrow" viewBox="0 0 90 60" aria-hidden="true"><path d="M84 52 C 66 50, 40 40, 22 16"/><path d="M14 26 L21 14 L34 18"/></svg>
      <span class="mn-head">${posts.length > 1 ? 'I wrote about this!' : 'I wrote about this one!'}</span>
      ${posts.map(p => `<a href="blog.html#${UI.esc(p.slug)}">→ ${UI.esc(p.title)}</a>`).join('')}
    </aside>`;
  }

  function render() {
    if (!items.length) { detailEl.innerHTML = '<p class="lead">Nothing here yet.</p>'; return; }
    const wanted = decodeURIComponent(location.hash.slice(1));
    let idx = items.findIndex(it => it.id === wanted);
    if (idx < 0) idx = 0;
    const it = items[idx];

    indexEl.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.dataset.id === it.id));
    const activeLink = indexEl.querySelector('a.active');
    if (activeLink && window.innerWidth <= 900) activeLink.scrollIntoView({ block: 'nearest', inline: 'center' });

    const meta = [it.where, it.when].filter(Boolean).join(' · ');
    const related = (it.related || []).map(r => {
      const target = items.find(x => x.id === r);
      return target ? `<a href="#${UI.esc(r)}">${target.shortTitle || target.title}</a>` : '';
    }).filter(Boolean).join(', ');
    const prev = items[idx - 1], next = items[idx + 1];

    detailEl.innerHTML = `
      ${blogNote(it)}
      ${meta ? `<p class="eyebrow">${meta}</p>` : ''}
      <h2 class="detail-title">${it.title}</h2>
      ${it.subtitle ? `<p class="detail-sub">${it.subtitle}</p>` : ''}
      ${UI.badges(it.awards)}
      ${UI.chips(it.tags)}
      ${it.summary ? `<p class="lead">${it.summary}</p>` : ''}
      ${UI.list(it.highlights, 'highlights')}
      ${UI.links(it.links)}
      ${related ? `<p class="related">Related: ${related}</p>` : ''}
      <div id="media"></div>
      <nav class="pager">
        <span>${prev ? `<a href="#${UI.esc(prev.id)}">← ${prev.shortTitle || prev.title}</a>` : ''}</span>
        <span>${next ? `<a href="#${UI.esc(next.id)}">${next.shortTitle || next.title} →</a>` : ''}</span>
      </nav>`;

    window.Media.renderAll(document.getElementById('media'), `${kind}/${it.id}`, it);
    document.title = `${it.shortTitle || it.title} · ${data.pageTitle} · ${(window.SITE || {}).name || ''}`;
  }

  window.addEventListener('hashchange', () => {
    render();
    if (window.innerWidth > 900) window.scrollTo({ top: 0, behavior: 'smooth' });
    else detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  render();
})();
