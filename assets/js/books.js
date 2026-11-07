/* books.js — the "my books" shelf + journal pop-up (books are listed in config/books.js).
   Used on the Blog and About Me pages: put  ${window.Bookshelf.html()}  where the shelf should go. */
(function () {
  const UI = window.UI;
  const BK = window.BOOKS || {};
  const books = BK.books || [];
  const SPINE_STYLES = ['red', 'paper', 'blue', 'ink', 'hatch-red', 'paper', 'hatch-blue', 'red', 'blue', 'paper', 'ink', 'hatch-blue', 'red', 'paper'];
  // stable pseudo-random spine size from the title, so the shelf looks hand-stacked
  const hash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

  function bookshelf() {
    if (!books.length) return '';
    return `<aside class="bookshelf" aria-label="${UI.esc(BK.shelfTitle || 'my books')}">
      <h2 class="shelf-title">${UI.esc(BK.shelfTitle || 'my books')}</h2>
      <div class="shelf">
        ${books.map((b, i) => {
          const h = hash(b.title);
          const style = b.current ? 'current' : SPINE_STYLES[i % SPINE_STYLES.length];
          return `<button type="button" class="book ${style}" data-book="${i}"
              style="--h:${150 + (h % 30)}px;--w:${26 + (h % 7)}px;--tilt:${b.current ? 9 : 0}deg"
              title="${UI.esc(b.title)}${b.author ? ' · ' + UI.esc(b.author) : ''}">
            <span>${UI.esc(b.title)}</span>
            ${b.current ? `<i class="current-note" aria-hidden="true">★ ${UI.esc(BK.currentNote || 'currently reading!')}
              <svg viewBox="0 0 60 50"><path d="M8 6 C 30 4, 46 18, 44 42"/><path d="M35 34 L44 44 L52 33"/></svg></i>` : ''}
          </button>`;
        }).join('')}
      </div>
    </aside>`;
  }

  // journal page pop-up
  const dlg = document.createElement('dialog');
  dlg.className = 'journal';
  document.body.appendChild(dlg);
  function openBook(b) {
    const paras = (b.thoughts || '').split(/\n\s*\n/).map(t => t.trim()).filter(Boolean);
    dlg.innerHTML = `
      <button type="button" class="journal-close" aria-label="Close">✕</button>
      ${b.current ? `<p class="journal-flag">★ ${UI.esc(BK.currentNote || 'currently reading!')}</p>` : ''}
      <h2>${UI.esc(b.title)}</h2>
      ${b.author ? `<p class="journal-author">by ${UI.esc(b.author)}</p>` : ''}
      ${b.finished ? `<p class="journal-date">${UI.esc(b.finished)}</p>` : ''}
      <div class="journal-body">${paras.length ? paras.map(t => `<p>${UI.esc(t)}</p>`).join('')
        : `<p class="journal-empty">${b.current ? 'still reading... thoughts coming soon!' : 'thoughts coming soon...'}</p>`}</div>`;
    dlg.showModal();
  }
  dlg.addEventListener('click', e => {
    // close on the ✕ or on a click outside the page
    const r = dlg.getBoundingClientRect();
    const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (outside || e.target.closest('.journal-close')) dlg.close();
  });
  document.addEventListener('click', e => {
    const btn = e.target.closest('.book');
    if (btn) openBook(books[+btn.dataset.book]);
  });

  window.Bookshelf = { html: bookshelf };
})();
