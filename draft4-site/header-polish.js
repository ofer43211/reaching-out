(() => {
  function polishHeader() {
    const marks = document.querySelector('.brand-marks');
    if (!marks) return;

    const candidates = [...document.querySelectorAll(
      'nav, [role="navigation"], .site-nav, .main-nav, .nav'
    )];

    const nav = candidates.find(el => {
      const text = (el.textContent || '').replace(/\s+/g, ' ');
      const he = ['קריאה','מודל','ראיות','היסטוריה']
        .filter(x => text.includes(x)).length;
      const en = ['Read','Model','Evidence','History']
        .filter(x => text.includes(x)).length;
      return he >= 3 || en >= 3;
    });

    if (!nav) return;

    let row = document.querySelector('.draft4-nav-row');

    if (!row) {
      row = document.createElement('div');
      row.className = 'draft4-nav-row';
      marks.insertAdjacentElement('afterend', row);
    }

    if (nav.parentElement !== row) {
      row.appendChild(nav);
    }

    nav.classList.add('draft4-main-nav');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', polishHeader);
  } else {
    polishHeader();
  }

  setTimeout(polishHeader, 100);
  setTimeout(polishHeader, 500);
})();