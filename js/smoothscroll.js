let menuHead = document.querySelectorAll('.menu-list__link'); // получаем список ссылок в голове сайта
const mainScroll = document.querySelector('.main__scroll'); // получаем стрелочку вниз
const general = [...menuHead, mainScroll];
general.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const ID = event.target.getAttribute('href').substr(1);
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
