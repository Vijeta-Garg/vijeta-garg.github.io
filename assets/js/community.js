/* community.js — builds the COMMUNITY page from config/community.js */
(function () {
  const UI = window.UI, C = window.COMMUNITY || { items: [] };
  const root = document.getElementById('app');
  root.innerHTML = `
    <h1 class="page-title">${C.pageTitle || 'Community'}</h1>
    ${C.intro ? `<p class="page-intro">${C.intro}</p>` : ''}
    <div class="community-list">${(C.items || []).map(it => `
      <article class="card community-card" id="${UI.esc(it.id)}">
        ${it.when ? `<p class="eyebrow">${it.when}</p>` : ''}
        <h2>${it.title}</h2>
        ${it.role ? `<p class="role">${it.role}</p>` : ''}
        ${UI.badges(it.awards)}
        ${UI.list(it.highlights)}
        ${UI.links(it.links)}
        <div data-mini="${UI.esc(it.id)}"></div>
      </article>`).join('')}
    </div>`;
  (C.items || []).forEach(it => {
    const el = root.querySelector(`[data-mini="${CSS.escape(it.id)}"]`);
    if (el) window.Media.renderMiniGallery(el, `community/${it.id}`, it);
  });
})();
