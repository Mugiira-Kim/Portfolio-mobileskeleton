const mobileMenu = document.querySelector('.menu-wrapper .menu ul');
const menuItems = document.querySelectorAll('.toggle-menu');

const toggleMenu = () => {
  mobileMenu.classList.toggle('mobile-menu');
};

menuItems.forEach((menuItem) => { menuItem.addEventListener('click', toggleMenu); });