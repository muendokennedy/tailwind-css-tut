const initApp = () => {
  const humburgerBtn = document.getElementById('humburger-button'),
  mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    humburgerBtn.classList.toggle('toggle-button');
  }

  humburgerBtn.addEventListener('click', toggleMenu);

  mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);