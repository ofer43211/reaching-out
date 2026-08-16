(() => {
  const norm = (value) =>
    (value || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const all = () => [...document.querySelectorAll('body *')];

  function ensureHistorySemantics() {
    if (document.querySelector('link[data-draft4-history-semantics]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'history-semantics.css';
    link.dataset.draft4HistorySemantics = 'true';
    document.head.appendChild(link);
  }

  function ensureAccessibilityPolish() {
    if (!document.querySelector('link[data-draft4-accessibility]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'accessibility-polish.css';
      link.dataset.draft4Accessibility = 'true';
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[data-draft4-accessibility]')) {
      const script = document.createElement('script');
      script.src = 'accessibility-polish.js';
      script.defer = true;
      script.dataset.draft4Accessibility = 'true';
      document.head.appendChild(script);
    }
  }

  function smallestMatching(predicate) {
    const candidates = all().filter((el) => {
      const text = norm(el.textContent);
      if (!predicate(text, el)) return false;

      const childAlsoMatches = [...el.children].some((child) =>
        predicate(norm(child.textContent), child)
      );

      return !childAlsoMatches;
    });

    return candidates.sort((a, b) => {
      const ta = norm(a.textContent).length;
      const tb = norm(b.textContent).length;
      return ta - tb;
    })[0] || null;
  }

  function findNavigation() {
    const candidates = all().filter((el) => {
      const text = norm(el.textContent);

      const he = ['קריאה', 'מודל', 'ראיות', 'היסטוריה']
        .filter((x) => text.includes(x)).length;

      const en = ['Read', 'Model', 'Evidence', 'History']
        .filter((x) => text.includes(x)).length;

      if (he < 3 && en < 3) return false;

      return !!el.querySelector('a, button');
    });

    return candidates.sort((a, b) =>
      norm(a.textContent).length - norm(b.textContent).length
    )[0] || null;
  }

  function markVacatedHeaderShells(nodes) {
    const headers = new Set();

    nodes.forEach((node) => {
      if (!node) return;
      const header = node.closest('header');
      if (header) headers.add(header);
    });

    requestAnimationFrame(() => {
      headers.forEach((header) => {
        const remainingText = norm(header.textContent);
        const remainingMedia = header.querySelector('img, svg, video');
        const remainingControls = header.querySelector('a, button, input, select');

        if (!remainingText && !remainingMedia && !remainingControls) {
          header.classList.add('draft4-vacated-header');
        }
      });
    });
  }

  function polishHeader() {
    ensureHistorySemantics();
    ensureAccessibilityPolish();

    const marks = document.querySelector('.brand-marks');
    if (!marks) return;

    const shalom = marks.querySelector('.brand-mark-shalom');
    const rotem  = marks.querySelector('.brand-mark-rotem');

    if (shalom) shalom.dataset.brandPosition = 'left';
    if (rotem)  rotem.dataset.brandPosition = 'right';

    const nav = findNavigation();

    const year = smallestMatching((text) =>
      /\b2026\b/.test(text) &&
      text.length <= 50 &&
      !text.includes('English') &&
      !text.includes('ReachingOut')
    );

    const language = smallestMatching((text) =>
      text.includes('English') &&
      text.includes('עברית') &&
      text.length <= 70
    );

    const title = smallestMatching((text) =>
      text.includes('ReachingOut') &&
      text.includes('Draft IV') &&
      text.length <= 70
    );

    const originalNodes = [year, language, title, nav].filter(Boolean);

    let metaRow = document.querySelector('.draft4-meta-row');

    if (!metaRow) {
      metaRow = document.createElement('div');
      metaRow.className = 'draft4-meta-row';
    }

    marks.insertAdjacentElement('afterend', metaRow);

    const uniqueMeta = [...new Set([year, language, title].filter(Boolean))];

    uniqueMeta.forEach((node) => {
      if (!metaRow.contains(node)) {
        metaRow.appendChild(node);
      }
    });

    let navRow = document.querySelector('.draft4-nav-row');

    if (!navRow) {
      navRow = document.createElement('div');
      navRow.className = 'draft4-nav-row';
    }

    metaRow.insertAdjacentElement('afterend', navRow);

    if (nav && nav.parentElement !== navRow) {
      navRow.appendChild(nav);
    }

    if (nav) nav.classList.add('draft4-main-nav');

    markVacatedHeaderShells(originalNodes);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', polishHeader);
  } else {
    polishHeader();
  }

  setTimeout(polishHeader, 120);
  setTimeout(polishHeader, 600);
})();