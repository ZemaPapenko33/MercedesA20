const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuListLink = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
  menu.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');
};

burger.addEventListener('click', () => {
  toggleMenu();
});

menuListLink.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
});
