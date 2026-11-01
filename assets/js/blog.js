/* blog.js — BLOG list + post reader.
   Posts are the .md files in content/blog/ (see the sample post for the format). */
(function () {
  const UI = window.UI, B = window.BLOG || {};
  const posts = (window.BLOG_POSTS || []).slice();
  const root = document.getElementById('app');

  const fmtDate = d => {
    if (!d) return '';
    const dt = new Date(d + 'T12:00:00');
    return isNaN(dt) ? d : dt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  };
  const md = text => (window.marked ? window.marked.parse(text || '') : `<pre>${UI.esc(text || '')}</pre>`);

  function list() {
    root.innerHTML = `
      <h1 class="page-title">${B.pageTitle || 'Blog'}</h1>
      ${B.intro ? `<p class="page-intro">${B.intro}</p>` : ''}
      ${posts.length ? `<div class="post-list">${posts.map(p => `
        <a class="post-item" href="#${UI.esc(p.slug)}">
          ${p.cover ? `<img src="${UI.esc(p.cover)}" alt="" loading="lazy">` : `<div class="ph">${p.emoji || '📝'}</div>`}
          <div><span class="post-date">${fmtDate(p.date)}</span><h2>${UI.esc(p.title)}</h2>
          ${p.summary ? `<p>${UI.esc(p.summary)}</p>` : ''}${UI.chips(p.tags)}</div>
        </a>`).join('')}</div>`
      : `<p class="lead">${B.emptyMessage || 'Posts coming soon!'}</p>`}`;
    document.title = `${B.pageTitle || 'Blog'} · ${(window.SITE || {}).name || ''}`;
  }

  function post(p) {
    root.innerHTML = `
      <div class="narrow">
        <p><a href="blog.html">← All posts</a></p>
        <p class="post-date">${fmtDate(p.date)}</p>
        <h1 class="detail-title">${UI.esc(p.title)}</h1>
        ${UI.chips(p.tags)}
        <div class="post-body">${md(p.body)}</div>
      </div>`;
    document.title = `${p.title} · ${(window.SITE || {}).name || ''}`;
  }

  function route() {
    const slug = decodeURIComponent(location.hash.slice(1));
    const p = posts.find(x => x.slug === slug);
    p ? post(p) : list();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
