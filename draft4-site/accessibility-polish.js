(() => {
  const doc = document;
  const root = doc.documentElement;
  const main = doc.querySelector('main');
  const navButtons = [...doc.querySelectorAll('.nav-btn')];
  const langButtons = [...doc.querySelectorAll('.lang-btn')];
  const views = [...doc.querySelectorAll('.view')];
  const claimList = doc.getElementById('claimList');
  const claimDetail = doc.getElementById('claimDetail');
  const modelButton = doc.getElementById('loadModelSource');
  const modelSource = doc.getElementById('modelSource');

  if (main && !main.id) {
    main.id = 'main-content';
    main.tabIndex = -1;
  }

  let skipLink = doc.querySelector('.skip-link');
  if (!skipLink && main) {
    skipLink = doc.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    doc.body.prepend(skipLink);
  }

  function isHebrew() {
    return root.lang === 'he' || root.dir === 'rtl';
  }

  function syncLanguageLabels() {
    const he = isHebrew();
    if (skipLink) skipLink.textContent = he ? 'דלג לתוכן' : 'Skip to content';
    const group = doc.querySelector('.lang-switch');
    if (group) group.setAttribute('aria-label', he ? 'שפה' : 'Language');
    if (claimList) claimList.setAttribute('aria-label', he ? 'בחירת טענה' : 'Claim selection');
    if (claimDetail) claimDetail.setAttribute('aria-label', he ? 'פרטי הטענה הפעילה' : 'Active claim details');
  }

  function syncNavState() {
    navButtons.forEach((button) => {
      const targetId = button.dataset.view;
      const active = button.classList.contains('active');
      if (targetId) button.setAttribute('aria-controls', targetId);
      button.setAttribute('aria-pressed', String(active));
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });

    views.forEach((view) => {
      const active = view.classList.contains('active');
      view.setAttribute('aria-hidden', String(!active));
      if (active) view.removeAttribute('inert');
      else view.setAttribute('inert', '');
    });
  }

  function syncLanguageState() {
    langButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    });
    syncLanguageLabels();
  }

  function syncClaimState() {
    if (!claimList) return;
    const buttons = [...claimList.querySelectorAll('.claim-button')];
    buttons.forEach((button) => {
      const active = button.classList.contains('active');
      button.setAttribute('aria-pressed', String(active));
      if (active) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }

  if (claimDetail) {
    claimDetail.setAttribute('role', 'region');
    claimDetail.setAttribute('aria-live', 'polite');
    claimDetail.setAttribute('aria-atomic', 'false');
  }

  if (modelButton && modelSource) {
    modelButton.setAttribute('aria-controls', 'modelSource');
    const syncModelBusy = () => {
      modelSource.setAttribute('aria-busy', String(modelButton.disabled));
    };
    syncModelBusy();
    new MutationObserver(syncModelBusy).observe(modelButton, {
      attributes: true,
      attributeFilter: ['disabled']
    });
  }

  syncNavState();
  syncLanguageState();
  syncClaimState();

  const stateObserver = new MutationObserver(() => {
    syncNavState();
    syncLanguageState();
    syncClaimState();
  });

  navButtons.forEach((button) => stateObserver.observe(button, { attributes: true, attributeFilter: ['class'] }));
  langButtons.forEach((button) => stateObserver.observe(button, { attributes: true, attributeFilter: ['class'] }));
  views.forEach((view) => stateObserver.observe(view, { attributes: true, attributeFilter: ['class'] }));
  if (claimList) stateObserver.observe(claimList, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

  new MutationObserver(syncLanguageLabels).observe(root, {
    attributes: true,
    attributeFilter: ['lang', 'dir']
  });
})();
