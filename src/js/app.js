/* Imports */
// const dataModule = require('./data');
// const keyBoardModule = require('./Keyboard');

// const KeyBoard = keyBoardModule.default;
// const keys = dataModule.default;

// window.addEventListener('DOMContentLoaded', () => {
//   const virtualKeyboard = new KeyBoard('ru', keys);
//   virtualKeyboard.buildKeyboard();
// });

const dataModule = require('./data');
const keyBoardModule = require('./VirtualKeyboard');

const data = dataModule.default;
const VirtualKeyBoard = keyBoardModule.default;

window.addEventListener('DOMContentLoaded', () => {
  const virtualKeyboard = new VirtualKeyBoard('ru', data);
  virtualKeyboard.buildKeyboard();
});
