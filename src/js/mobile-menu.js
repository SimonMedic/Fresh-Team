(() => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const openMenuBtn = document.querySelector('.mobile-menu-open');
  const closeMenuBtn = document.querySelector('.mobile-menu-close');
  const body = document.body;
  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    if (!isMenuOpen) {
      body.style.overflow = 'hidden'; // Blokowanie scrolla
    } else {
      body.style.overflow = ''; // Odblokowanie scrolla
    }
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.style.overflow = ''; // Odblokowanie scrolla
  });
})();
