const modalBtn = document.querySelectorAll('.more'); // получаем кнопку узнать больше
const modal = document.querySelector('.modal'); //получаем модальное окно

modalBtn.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

modal.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden');
  }
});
