/* =====================================================================
   main.js — shared header, footer, dark mode and small helpers.
   You normally don't need to edit this file: change config/site.js.
   ===================================================================== */
(function () {
  const SITE = window.SITE || {};

  /* ---------- tiny helpers (used by the other scripts) ---------- */
  const UI = {
    esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    },
    /** "01-testing_rig.jpg" -> "testing rig" */
    prettyName(path) {
      return UI.fileName(path).replace(/\.[^.]+$/, '').replace(/^\d+[\s._-]+/, '').replace(/[_-]+/g, ' ').trim();
    },
    ext(path) { return (String(path).split('.').pop() || '').toLowerCase(); },
    fileName(path) {
      const f = String(path).split('/').pop();
      try { return decodeURIComponent(f); } catch (e) { return f; }
    },
    /** media found in content/<key>/ (from the auto-generated content/manifest.js) */
    media(key) {
      const m = (window.MEDIA && window.MEDIA[key]) || {};
      return { images: m.images || [], videos: m.videos || [], files: m.files || [], slides: m.slides || [] };
    },
    list(arr, cls) {
      if (!arr || !arr.length) return '';
      return `<ul class="${cls || ''}">${arr.map(x => `<li>${x}</li>`).join('')}</ul>`;
    },
    badges(arr) {
      if (!arr || !arr.length) return '';
      return `<div class="badges">${arr.map(a => `<span class="badge">★ ${a}</span>`).join('')}</div>`;
    },
    chips(arr, extraCls) {
      if (!arr || !arr.length) return '';
      return `<div class="chips ${extraCls || ''}">${arr.map(t => `<span class="chip">${t}</span>`).join('')}</div>`;
    },
    links(arr) {
      if (!arr || !arr.length) return '';
      return `<div class="link-row">${arr.map(l =>
        `<a href="${UI.esc(l.url)}" target="_blank" rel="noopener">[ ${l.label} ]</a>`).join('')}</div>`;
    }
  };
  window.UI = UI;

  /* ---------- icons ---------- */
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>'
  };
  UI.icons = ICONS;

  /* ---------- header ---------- */
  const page = document.body.dataset.page || '';
  const nav = (SITE.nav || []).slice();
  if (SITE.resumePdf) nav.push({ label: 'Resume/CV', href: SITE.resumePdf, external: true });

  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `
      <nav class="nav" id="nav" aria-label="Main">
        <a class="brand" href="index.html">${UI.esc(SITE.brand || '...')}</a>
        <ul class="nav-links">
          ${nav.map(n => `<li><a href="${UI.esc(n.href)}" ${n.external ? 'target="_blank" rel="noopener"' : ''}
              class="${n.page === page ? 'active' : ''}">${UI.esc(n.label)}</a></li>`).join('')}
        </ul>
        <div class="nav-tools">
          <button class="icon-btn menu-btn" id="menu-btn" aria-label="Open main menu" aria-expanded="false">${ICONS.menu}</button>
        </div>
      </nav>`;
    const navEl = header.querySelector('.nav');

    const menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener('click', () => {
      const open = navEl.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }

  /* ---------- footer ---------- */
  const footer = document.getElementById('site-footer');
  if (footer) {
    const s = SITE.social || {};
    const socials = [
      s.github ? `<a href="${UI.esc(s.github)}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>` : '',
      s.linkedin ? `<a href="${UI.esc(s.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>` : ''
    ].join('');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="fname">${UI.esc(SITE.name || '')}</div>
      <div class="socials">${socials}</div>
      <p class="credit">© ${new Date().getFullYear()} ${UI.esc(SITE.name || '')}. ${SITE.footerNote || ''}</p>`;
  }

  /* ---------- page title ---------- */
  if (SITE.name && !document.title.includes(SITE.name)) document.title = `${document.title} · ${SITE.name}`;
})();
