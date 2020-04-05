const dataModule = require('./data');
const keyBoardModule = require('./VirtualKeyboard');

const data = dataModule.default;
const VirtualKeyBoard = keyBoardModule.default;

const setKeyboardLangToLocalStorage = () => {
  const localStorageContentLang = window.localStorage.getItem('lang');
  window.localStorage.setItem('lang', localStorageContentLang || 'ru');
};

const getKeyboardLangFromLocalStorage = () => window.localStorage.getItem('lang');

window.addEventListener('DOMContentLoaded', () => {
  setKeyboardLangToLocalStorage();
  const virtualKeyboard = new VirtualKeyBoard(getKeyboardLangFromLocalStorage(), data);
  virtualKeyboard.buildKeyboard();
});
