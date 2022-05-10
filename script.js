const mobileMenu = document.querySelector('.menu-wrapper .menu ul');
const menuItems = document.querySelectorAll('.toggle-menu');
const mobileBody = document.querySelector('body');

const toggleMenu = () => {
  mobileMenu.classList.toggle('mobile-menu');
  mobileBody.classList.toggle('fixed');
};

menuItems.forEach((menuItem) => { menuItem.addEventListener('click', toggleMenu); });