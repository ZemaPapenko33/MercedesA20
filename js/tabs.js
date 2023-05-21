const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]'); //получаем кнопки таба
const textTabsHandler = document.querySelectorAll('[data-tabs-field]'); //получаем блок текста в табе
const titleTabs = document.querySelectorAll('.design__title'); //Получаем заголовки
for (let btn of tabsHandlerElements) {
  btn.addEventListener('click', () => {
    tabsHandlerElements.forEach((item) => {
      item.classList.remove('design-list__item_active');
      btn.classList.add('design-list__item_active');
      textTabsHandler.forEach((item) => {
        if (item.dataset.tabsField === btn.dataset.tabsHandler) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
      titleTabs.forEach((item) => {
        if (item.dataset.tabsField === btn.dataset.tabsHandler) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}
