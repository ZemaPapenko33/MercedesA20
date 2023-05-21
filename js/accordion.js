const btns = document.querySelectorAll('.feature__link'); //получаем список кнопок стрелок
const lists = document.querySelectorAll('.feature-sub'); // получаем список характеристик
const open = (btn, index) => {
  btn.classList.add('feature__link_active');
  lists[index].classList.remove('hidden');
};
const close = (btn, index) => {
  btn.classList.remove('feature__link_active');
  lists[index].classList.add('hidden');
};
btns.forEach((item, index) => {
  //проходимся по кнопкам, и если какая то из них нажата то ей даем клас актив а у остальных забираем, и разворачиваем список принадлежащий именно этой кнопке
  item.addEventListener('click', () => {
    if (item.classList.contains('feature__link_active')) {
      close(item, index);
    } else {
      open(item, index);
    }
    btns.forEach((item, idx) => {
      if (index !== idx) {
        item.classList.remove('feature__link_active');
      }
    });
    lists.forEach((item, idx) => {
      if (index !== idx) {
        item.classList.add('hidden');
      }
    });
  });
});
