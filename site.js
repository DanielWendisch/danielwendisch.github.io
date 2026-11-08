(() => {
  const root = document.getElementById('daniel-site');
  const sections = Array.from(root.querySelectorAll('[data-content]'));
  const links = Array.from(root.querySelectorAll('.dw-navigation [data-page]'));
  const names = new Set(sections.map(section => section.dataset.content));

  function showSection() {
    const requested = window.location.hash.slice(1);
    const current = links.find(link => link.getAttribute('aria-current') === 'page');
    const selected = names.has(requested) ? requested :
      (requested === 'main-content' && current ? current.dataset.page : 'about');
    sections.forEach(section => { section.hidden = section.dataset.content !== selected; });
    links.forEach(link => {
      if (link.dataset.page === selected) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const title = root.querySelector('[data-content="' + selected + '"] h2').textContent;
    document.title = title + ' — Daniel Wendisch, MD/PhD';
  }

  window.addEventListener('hashchange', showSection);
  showSection();
})();
