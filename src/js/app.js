/* Imports */
const dataModule = require('./data');
const keyBoardModule = require('./Keyboard');

const KeyBoard = keyBoardModule.default;
const keys = dataModule.default;

window.addEventListener('DOMContentLoaded', () => {
  const virtualKeyboard = new KeyBoard('ru', keys);
  virtualKeyboard.buildKeyboard();
});
