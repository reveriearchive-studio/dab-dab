(() => {
  const menu = document.querySelector('.menu-button');
  const links = document.querySelector('#site-links');

  if (menu && links) {
    menu.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
      menu.textContent = isOpen ? 'Close' : 'Menu';
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        menu.textContent = 'Menu';
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }
})();
