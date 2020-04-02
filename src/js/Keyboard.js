const keyButtonModule = require('./KeyButton');
const keyBoardRowsModule = require('./KeyboardRows');

const KeyButton = keyButtonModule.default;
const KeyBoardRows = keyBoardRowsModule.default;
class Keyboard {
  constructor(lang, keys) {
    this.keys = keys;
    this.lang = lang;
    this.capsLock = 'off';
    this.keyButtonsHTML = '';
    this.keyboardRowsHTML = '';
    this.keyboardLangHTML = '';
    this.keyboardIdHTML = '';
    this.keyButtonsHTML = '';
    this.textAreaHTML = '';
    this.buttonsSpanKeyLangRuArrHTML = [];
    this.buttonsSpanKeyLangEnArrHTML = [];
    this.selectedButtonHTML = '';
    this.selectedButtonValue = '';
  }

  generateKeyboardTemaplate() {
    const keyboardTemplate = `
    <div class="wrapper">
    <form action="#" class="input">
        <textarea name="input__area" id="input" cols="100" rows="10">
        </textarea>
    </form>
    <section id="keyboard" class="keyboard">
        <h1 class="keyboard__title">Virtual Keyboard: Переключение языка LeftAlt+LeftShift</h1> 
        <div class="keyboard__lang"><span>${this.lang}</span></div>
        <hr>
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>  
        <div class="keyboard__row"></div>  
        <div class="keyboard__row"></div>  
        <div class="keyboard__row"></div>  
    </section>
    </div>`;
    return keyboardTemplate;
  }

  generateKeyButtons() {
    const keyButtons = [];
    this.keys.forEach((keyButton) => {
      keyButtons.push(new KeyButton(keyButton));
    });
    this.keyButtonsHTML = keyButtons;
  }

  generateKeyboardRowsHTML() {
    this.keyboardRowsHTML = new KeyBoardRows('.keyboard__row', this.keyButtonsHTML);
  }

  buildKeyboard() {
    this.generateKeyButtons();
    this.generateKeyboardRowsHTML();
    this.renderKeyboardTemaplate();
    this.keyboardIdHTML = document.getElementById('keyboard');
    this.textAreaHTML = document.getElementById('input');
    this.keyButtonsHTML = document.querySelectorAll('.keyboard__item');
    this.keyboardLangHTML = document.querySelector('.keyboard__lang > span');
    this.bindEvents();
  }

  bindEvents() {
    // this.keyboardID.addEventListener('click', (e) => this.clickOnButtons(e));
    window.addEventListener('keydown', (e) => this.pressDownKeyboard(e));
    window.addEventListener('keyup', (e) => this.pressUpKeyboard(e));
  }

  removeActiveButtons() {
    this.keyButtonsHTML.forEach((elem) => {
      elem.classList.remove('keyboard__item_active');
    });
  }

  addActiveToButton() {
    this.selectedButtonHTML.classList.add('keyboard__item_active');
  }

  toggleCapsLockButton() {
    if (this.selectedButtonHTML.dataset.code === 'CapsLock') {
      this.selectedButtonHTML.classList.toggle('keyboard__item_capslock');
      this.capsLock = this.capsLock === 'off' ? 'on' : 'off';
    }
    // console.log(this.capsLock);
  }

  pressDownKeyboard(e) {
    e.preventDefault();
    // console.log(e);

    this.selectedButtonHTML = [...this.keyButtonsHTML].find((elem) => {
      if (elem.dataset.code === e.code) {
        return elem;
      }
      return undefined;
    });
    if (this.selectedButtonHTML) {
      this.getButtonValue();
      this.addActiveToButton();
      switch (e.code) {
        case 'Backspace':
          this.delInputValue();
          break;
        case 'ControlLeft':
        case 'ShiftLeft':
          if (e.altKey && e.shiftKey) {
            this.changeKeyboardLanguage();
          }
          break;
        case 'CapsLock':
          this.changeKeyboardButtonsContent();
          break;
        case 'Tab':
        case 'Delete':
        case 'Enter':
        case 'ShiftRight':
        case 'ControlRight':
        case 'MetaLeft':
        case 'AltRight':
        case 'AltLeft':
          if (e.altKey && e.shiftKey) {
            this.changeKeyboardLanguage();
          }
          break;
        default:
          this.setInputValue(this.selectedButtonValue);
      }
    }
  }

  pressUpKeyboard(e) {
    // console.log(e);
    // console.log(this.slectedElement.dataset.code);
    this.removeActiveButtons();
    if (e.code === 'CapsLock') {
      this.toggleCapsLockButton();
    }
  }

  clickOnButtons(e) {
    this.selectedButtonHTML = e.target;
    if (this.selectedButtonHTML.tagName === 'DIV') {
      this.removeActiveButtons();
      this.addActiveToButton();
    }

    console.log(e);
  }

  renderKeyboardTemaplate() {
    document.body.innerHTML = this.generateKeyboardTemaplate();
    this.keyboardRowsHTML.renderKeyboardRows();
  }

  getButtonValue() {
    const spanLangCaps = this.selectedButtonHTML.querySelector(`.key.lang-${this.lang} `)
      .querySelector(`.key__case-${this.capsLock}`);
    // console.log(this.capsLock);
    // console.log(spanLangCaps.querySelector(`.key__case-${this.capsLock}`));
    this.selectedButtonValue = spanLangCaps.innerHTML;
  }

  setInputValue(value) {
    this.textAreaHTML.value += value;
  }

  delInputValue() {
    // console.log(this.textArea.value);
    this.textAreaHTML.value = this.textAreaHTML.value.slice(0, -1);
  }

  changeKeyboardButtonsContent() {
    this.getButtonsSpanRuHTML();
    this.getButtonsSpanEnHTML();
    // console.log(this.buttonsSpanKeyLangEnArrHTML);
    this.toggleHiddenSpanKeyCaseClass();
  }

  toggleHiddenSpanKeyCaseClass() {
    this.buttonsSpanKeyLangRuArrHTML.forEach((elem) => {
      console.log(elem.querySelector(`.key__case-${this.capsLock}`));
      elem.querySelector('.key__case-on').classList.toggle('hidden');
      elem.querySelector('.key__case-off').classList.toggle('hidden');
    });
    this.buttonsSpanKeyLangEnArrHTML.forEach((elem) => {
      elem.querySelector('.key__case-on').classList.toggle('hidden');
      elem.querySelector('.key__case-off').classList.toggle('hidden');
    });
    this.clearSpanKeyLangArrsHTML();
  }

  changeKeyboardLanguage() {
    this.lang = this.lang === 'ru' ? 'en' : 'ru';
    this.getButtonsSpanRuHTML();
    this.getButtonsSpanEnHTML();
    this.toggleHiddenSpanKeyLangClass();
    console.log(this);
    // console.log(this.keyButtonsHTML.querySelectorAll(`.key.lang-${this.lang}`));
    this.keyboardLangHTML.innerText = this.lang;
  }

  getButtonsSpanRuHTML() {
    [...this.keyButtonsHTML].forEach((elem) => {
      [...elem.querySelectorAll('.key.lang-ru')].forEach((el) => {
        this.buttonsSpanKeyLangRuArrHTML.push(el);
      });
    });
  }

  getButtonsSpanEnHTML() {
    [...this.keyButtonsHTML].forEach((elem) => {
      [...elem.querySelectorAll('.key.lang-en')].forEach((el) => {
        this.buttonsSpanKeyLangEnArrHTML.push(el);
      });
    });
  }

  toggleHiddenSpanKeyLangClass() {
    this.buttonsSpanKeyLangRuArrHTML.forEach((elem) => {
      elem.classList.toggle('hidden');
    });
    this.buttonsSpanKeyLangEnArrHTML.forEach((elem) => {
      elem.classList.toggle('hidden');
    });
    this.clearSpanKeyLangArrsHTML();
  }

  clearSpanKeyLangArrsHTML() {
    this.buttonsSpanKeyLangEnArrHTML = [];
    this.buttonsSpanKeyLangRuArrHTML = [];
  }
}

export { Keyboard as default };
