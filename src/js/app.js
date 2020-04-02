/* Imports */
const dataModule = require('./data');
const keyButtonModule = require('./KeyButton');
const keyBoardModule = require('./Keyboard');
const keyBoardRowsModule = require('./KeyboardRows');

const KeyButton = keyButtonModule.default;
const KeyBoard = keyBoardModule.default;
const KeyBoardRows = keyBoardRowsModule.default;
const keys = dataModule.default;

const generateKeyButtons = (data) => {
  const keyButtons = [];
  data.forEach((keyButton) => {
    keyButtons.push(new KeyButton(keyButton));
  });
  return keyButtons;
};

window.addEventListener('DOMContentLoaded', () => {
  /* start create virtualKeyboard */
  const virtualKeyboard = new KeyBoard('ru');
  const keyButtons = generateKeyButtons(keys);
  virtualKeyboard.renderKeyboardTemaplate();
  const virtualKeyboardRows = new KeyBoardRows('.keyboard__row', keyButtons);
  virtualKeyboardRows.renderKeyboardRows();
  /* end create virtualKeyboard */
  /* handler events */
  virtualKeyboard.buildKeyboard();
  virtualKeyboard.bindEvents();
});
