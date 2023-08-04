(() => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const openMenuBtn = document.querySelector('#open-menu');
  const closeMenuBtn = document.querySelector('#close-menu');
  const changeHeaderNav = document.querySelector('#change-header-nav');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('modal-open');
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');
    changeHeaderNav.classList.toggle('is-open');
    closeMenuBtn.classList.toggle('is-open');
  }

  window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
    if (!e.matches) return;
    openMenuBtn.classList.remove('is-open');
    closeMenuBtn.classList.remove('is-open');
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    closeMenuBtn.classList.remove('is-open');
  });

  const howitworks = document.querySelector('.link-howitworks');
  const fruits = document.querySelector('.link-fruits');
  const contacts = document.querySelector('.link-contacts');
  const basket = document.querySelector('.link-basket');

  howitworks.addEventListener('click', closeMenu);
  fruits.addEventListener('click', closeMenu);
  contacts.addEventListener('click', closeMenu);
  basket.addEventListener('click', closeMenu);

  function closeMenu() {
    document.body.classList.remove('modal-open');
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
    closeMenuBtn.classList.remove('is-open');
  }
})();
