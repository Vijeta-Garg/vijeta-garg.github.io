/* about.js — builds the ABOUT ME (home) page from config/about.js */
(function () {
  const UI = window.UI, A = window.ABOUT || {}, SITE = window.SITE || {};
  const root = document.getElementById('app');
  const initials = (SITE.name || '').split(/\s+/).map(w => w[0] || '').join('').slice(0, 2).toUpperCase();

  // a cover picture for each "Explore" card: the config image, else the first photo found in that section
  function coverFor(card) {
    if (card.image) return card.image;
    const prefix = card.mediaFrom ? card.mediaFrom + '/' : null;
    if (!prefix || !window.MEDIA) return null;
    for (const key of Object.keys(window.MEDIA)) {
      if (key.startsWith(prefix) && (window.MEDIA[key].images || []).length) return window.MEDIA[key].images[0];
    }
    return null;
  }

  root.innerHTML = `
    <section class="hero">
      <img class="avatar" src="${UI.esc(A.photo || '')}" alt="Photo of ${UI.esc(SITE.name || '')}"
           onerror="this.outerHTML='<div class=&quot;avatar-fallback&quot;>${initials}</div>'">
      <h1>${UI.esc(SITE.name || '')}</h1>
      ${A.greeting ? `<p class="greeting">${A.greeting}</p>` : ''}
      ${SITE.tagline ? `<p class="tagline">${SITE.tagline}</p>` : ''}
      ${UI.chips(A.interests, 'interest-chips')}
    </section>

    <section class="narrow bio">${(A.bio || []).map(p => `<p>${p}</p>`).join('')}</section>
<!--
    ${A.academics && A.academics.length ? `
    <section class="narrow">
      <h2 class="section-title">${A.academicsTitle || 'Academics'}</h2>
      <div class="glance">${A.academics.map(a => `<div class="card"><h3>${a.label}</h3><p>${a.value}</p></div>`).join('')}</div>
    </section>` : ''}
	-->

    ${A.highlights && A.highlights.length ? `
    <section class="narrow">
      <h2 class="section-title">${A.highlightsTitle || 'Highlights'}</h2>
      <ul class="highlight-list">${A.highlights.map(h => `<li><span>${h}</span></li>`).join('')}</ul>
    </section>` : ''}

    ${A.explore && A.explore.length ? `
    <section class="narrow">
      <h2 class="section-title">${A.exploreTitle || 'Explore'}</h2>
      <div class="polaroid-grid">${A.explore.map(c => {
        const img = coverFor(c);
        return `<a class="polaroid" href="${UI.esc(c.href)}">${img ? `<img src="${UI.esc(img)}" alt="">` : `<div class="ph">${c.emoji || '✨'}</div>`}
          <span class="caption">${c.caption}</span></a>`;
      }).join('')}</div>
    </section>` : ''}`;
})();
