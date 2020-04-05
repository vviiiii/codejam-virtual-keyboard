import VirtualKeyboardItem from './VirtualKeyboardItem';

class VirtualKeyboard {
  constructor(lang, data) {
    this.lang = lang;
    this.data = data;
    this.capslock = 'off';
    this.shift = 'off';
    this.leftCtrl = 'off';
    this.leftAlt = 'off';
  }

  /* main function */
  buildKeyboard() {
    this.renderKeyboardTemaplate();
    this.renderKeyboardRowsTemplate();
    this.bindEventsHandlers();
    this.setThisKeyboardItems();
    this.setThisKeyboard();
  }

  setThisKeyboard() {
    this.keyboard = document.getElementById('keyboard');
  }

  setThisKeyboardItems() {
    this.keyboardItems = document.querySelectorAll('.keyboard__item');
  }

  /* render functions */
  generateKeyboardTemaplate() {
    const keyboardTemplate = `
    <div class="wrapper">
        <form action="#" class="input">
            <textarea name="input__area" id="input" cols="100" rows="10"></textarea>
        </form>
        <section id="keyboard" class="keyboard">
            <h1 class="keyboard__title">Virtual Keyboard создавалась в OS Windows: Переключение языка LeftCtrl+LeftAlt на физической клавиатуре, либо кликом мышки на эти кнопки </h1> 
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

  renderKeyboardTemaplate() {
    document.body.innerHTML = this.generateKeyboardTemaplate();
  }

  /* Generate keyboardItems template */
  generateKeyboardItemsTemaplate() {
    const keyboardItemsArr = [];
    this.data.forEach((data) => {
      const keyboardItem = new VirtualKeyboardItem(data, this.lang);
      keyboardItemsArr.push(keyboardItem.generateKeyboardItemTemplate());
    });
    return keyboardItemsArr;
  }

  generateKeyboardRowsContent() {
    const keyboardItemsTemaplates = this.generateKeyboardItemsTemaplate();
    const keyboardRow1 = keyboardItemsTemaplates.slice(0, 14);
    const keyboardRow2 = keyboardItemsTemaplates.slice(14, 29);
    const keyboardRow3 = keyboardItemsTemaplates.slice(29, 42);
    const keyboardRow4 = keyboardItemsTemaplates.slice(42, 55);
    const keyboardRow5 = keyboardItemsTemaplates.slice(55, 64);

    return {
      keyboardRow1,
      keyboardRow2,
      keyboardRow3,
      keyboardRow4,
      keyboardRow5,
    };
  }

  renderKeyboardRowsTemplate() {
    const keyboardRows = document.querySelectorAll('.keyboard__row');
    const {
      keyboardRow1,
      keyboardRow2,
      keyboardRow3,
      keyboardRow4,
      keyboardRow5,
    } = this.generateKeyboardRowsContent();

    keyboardRow1.forEach((keyboardItem) => {
      keyboardRows[0].append(keyboardItem);
    });
    keyboardRow2.forEach((keyboardItem) => {
      keyboardRows[1].append(keyboardItem);
    });
    keyboardRow3.forEach((keyboardItem) => {
      keyboardRows[2].append(keyboardItem);
    });
    keyboardRow4.forEach((keyboardItem) => {
      keyboardRows[3].append(keyboardItem);
    });
    keyboardRow5.forEach((keyboardItem) => {
      keyboardRows[4].append(keyboardItem);
    });
  }

  /* end render functions */

  /* event handlers functions */
  bindEventsHandlers() {
    this.addKeyboardKeyDownHandler();
    this.addKeyboardKeyUpHandler();
    this.addKeyboardMouseDownHandler();
    this.addKeyboardMouseUpHandler();
  }

  addKeyboardKeyDownHandler() {
    window.addEventListener('keydown', (e) => this.pressKeyboardItemDown(e));
  }

  addKeyboardKeyUpHandler() {
    window.addEventListener('keyup', (e) => this.pressKeyboardItemUp(e));
  }

  addKeyboardMouseDownHandler() {
    this.setThisKeyboard();
    this.keyboard.addEventListener('mousedown', (e) => this.mouseDownKeyboardItem(e));
  }

  addKeyboardMouseUpHandler() {
    this.setThisKeyboard();
    this.keyboard.addEventListener('mouseup', (e) => this.mouseUpKeyboardItem(e));
  }

  /* end event handlers functions */

  /* handlers callback functions */
  pressKeyboardItemDown(e) {
    e.preventDefault();
    this.setKeyboardTextareaFocus();
    this.setThisKeyboardItems();

    const pressedKeyboardItem = [...this.keyboardItems].find((elem) => {
      if (elem.dataset && elem.dataset.code === e.code) {
        return elem;
      }
      return undefined;
    });

    if (pressedKeyboardItem) {
      this.addActiveClassToKeyboardItem(pressedKeyboardItem);
    }
    switch (e.code) {
      case 'Backspace':
        this.processingDeleteBackspaceKeyboardItem('Backspace');
        break;
      case 'ControlLeft':
        if (e.altKey && e.ctrlKey) {
          this.changeKeyboardLanguage(this.keyboardItems);
        }
        break;
      case 'ShiftLeft':
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, this.keyboardItems);
        }
        break;
      case 'CapsLock':
        this.toggleActiveClassCapsLockKeyboardItem(pressedKeyboardItem);
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, this.keyboardItems);
        }
        break;
      case 'Tab':
        this.processingTabKeyboardItem();
        break;
      case 'Delete':
        this.processingDeleteBackspaceKeyboardItem('Delete');
        break;
      case 'Enter':
        this.processingEnterKeyboardItem();
        break;
      case 'ShiftRight':
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, this.keyboardItems);
        }
        break;
      case 'ControlRight':
        break;
      case 'MetaLeft':
        break;
      case 'AltRight':
        break;
      case 'AltLeft':
        if (e.altKey && e.ctrlKey) {
          this.changeKeyboardLanguage(this.keyboardItems);
        }
        break;
      case 'ArrowLeft':
        this.processingArrowKeyboardItem('ArrowLeft');
        break;
      case 'ArrowRight':
        this.processingArrowKeyboardItem('ArrowRight');
        break;
      case 'ArrowUp':
        this.processingArrowKeyboardItem('ArrowUp');
        break;
      case 'ArrowDown':
        this.processingArrowKeyboardItem('ArrowDown');
        break;
      default:
        if (pressedKeyboardItem) {
          this.setKeyboardItemInnerTextToTextarea(pressedKeyboardItem);
        }
    }
  }

  pressKeyboardItemUp(e) {
    e.preventDefault();

    this.setThisKeyboardItems();

    this.removeActiveClassFromKeyboardItems();
    switch (e.code) {
      case 'Backspace':
        break;
      case 'ControlLeft':
        break;
      case 'ShiftLeft':
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, this.keyboardItems);
        }
        break;
      case 'CapsLock':
        break;
      case 'Tab':
        break;
      case 'Delete':
        break;
      case 'Enter':
        break;
      case 'ShiftRight':
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, this.keyboardItems);
        }
        break;
      case 'ControlRight':
        break;
      case 'MetaLeft':
        break;
      case 'AltRight':
        break;
      case 'AltLeft':
        break;
      default:
    }
  }

  mouseDownKeyboardItem(e) {
    e.preventDefault();
    this.setKeyboardTextareaFocus();
    this.setThisKeyboardItems();

    if (e.target.classList.contains('keyboard__item')
        || e.target.classList.contains('key__content')) {
      if (e.target.classList.contains('keyboard__item')) {
        this.clickedElement = e.target;
      } else {
        this.clickedElement = e.target.closest('.keyboard__item');
      }

      if (this.clickedElement) {
        this.addActiveClassToKeyboardItem(this.clickedElement);
      }

      switch (this.clickedElement.dataset.code) {
        case 'Backspace':
          this.processingDeleteBackspaceKeyboardItem('Backspace');
          break;
        case 'ControlLeft':
          this.leftCtrl = this.leftCtrl === 'off' ? 'on' : 'off';
          if (this.leftCtrl === 'on' && this.leftAlt === 'on') {
            this.changeKeyboardLanguage(this.keyboardItems);
            this.leftCtrl = 'off';
            this.leftAlt = 'off';
          }
          break;
        case 'ShiftLeft':
          this.shift = 'on';
          this.changeKeyboardItemsContent(e, this.keyboardItems);
          break;
        case 'CapsLock':
          this.toggleActiveClassCapsLockKeyboardItem(this.clickedElement);
          this.changeKeyboardItemsContent(e, this.keyboardItems);
          break;
        case 'Tab':
          this.processingTabKeyboardItem();
          break;
        case 'Delete':
          this.processingDeleteBackspaceKeyboardItem('Delete');
          break;
        case 'Enter':
          this.processingEnterKeyboardItem();
          break;
        case 'ShiftRight':
          this.shift = 'on';
          this.changeKeyboardItemsContent(e, this.keyboardItems);
          break;
        case 'ControlRight':
          break;
        case 'MetaLeft':
          break;
        case 'AltRight':
          break;
        case 'AltLeft':
          this.leftAlt = this.leftAlt === 'off' ? 'on' : 'off';
          if (this.leftCtrl === 'on' && this.leftAlt === 'on') {
            this.changeKeyboardLanguage(this.keyboardItems);
            this.leftCtrl = 'off';
            this.leftAlt = 'off';
          }
          break;
        case 'ArrowLeft':
          this.processingArrowKeyboardItem('ArrowLeft');
          break;
        case 'ArrowRight':
          this.processingArrowKeyboardItem('ArrowRight');
          break;
        case 'ArrowUp':
          this.processingArrowKeyboardItem('ArrowUp');
          break;
        case 'ArrowDown':
          this.processingArrowKeyboardItem('ArrowDown');
          break;
        default:
          this.setKeyboardItemInnerTextToTextarea(this.clickedElement);
      }
    }
  }

  mouseUpKeyboardItem(e) {
    e.preventDefault();
    this.setThisKeyboardItems();
    this.removeActiveClassFromKeyboardItems();

    if (this.clickedElement) {
      switch (this.clickedElement.dataset.code) {
        case 'Backspace':
          break;
        case 'ControlLeft':
          break;
        case 'ShiftLeft':
          this.shift = 'off';
          this.changeKeyboardItemsContent(e, this.keyboardItems);
          break;
        case 'CapsLock':
          break;
        case 'Tab':
          break;
        case 'Delete':
          break;
        case 'Enter':
          break;
        case 'ShiftRight':
          this.shift = 'off';
          this.changeKeyboardItemsContent(e, this.keyboardItems);
          break;
        case 'ControlRight':
          break;
        case 'MetaLeft':
          break;
        case 'AltRight':
          break;
        case 'AltLeft':
          break;
        default:
      }
    }
  }

  /* end handlers callback functions */

  /* virtual keyboard visual functions */
  addActiveClassToKeyboardItem(elem) {
    this.elem = elem;
    elem.classList.add('keyboard__item_active');
  }

  removeActiveClassFromKeyboardItems() {
    this.setThisKeyboardItems();
    this.keyboardItems.forEach((elem) => {
      elem.classList.remove('keyboard__item_active');
    });
  }

  toggleActiveClassCapsLockKeyboardItem(elem) {
    if (elem.dataset.code === 'CapsLock') {
      elem.classList.toggle('keyboard__item_capslock');
      this.capslock = this.capslock === 'off' ? 'on' : 'off';
    }
  }

  changeKeyboardLanguage(items) {
    this.lang = this.lang === 'ru' ? 'en' : 'ru';
    this.setKeyboardLangToLocalStorage();

    const keyboardLangIndicator = document.querySelector('.keyboard__lang > span');
    keyboardLangIndicator.innerHTML = this.lang;
    [...items].forEach((elem) => {
      if (this.lang === 'ru') {
        elem.querySelectorAll('.key.lang-ru').forEach((el) => {
          el.classList.remove('hidden');
        });
        elem.querySelectorAll('.key.lang-en').forEach((el) => {
          el.classList.add('hidden');
        });
      }
      if (this.lang === 'en') {
        elem.querySelectorAll('.key.lang-ru').forEach((el) => {
          el.classList.add('hidden');
        });
        elem.querySelectorAll('.key.lang-en').forEach((el) => {
          el.classList.remove('hidden');
        });
      }
    });
  }

  setKeyboardLangToLocalStorage() {
    window.localStorage.setItem('lang', this.lang);
  }

  changeKeyboardItemsContent(e, items) {
    const shiftDataSet = ['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
      'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Minus', 'Equal', 'BracketLeft',
      'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash'];

    [...items].forEach((elem) => {
      elem.querySelectorAll('.key__content').forEach((el) => {
        if (!e.shiftKey || this.shift === 'off') {
          if (this.capslock === 'on') {
            el.classList.add('hidden');
            if (el.classList.contains('case-on')) {
              el.classList.remove('hidden');
            }
          }
          if (this.capslock === 'off') {
            el.classList.add('hidden');
            if (el.classList.contains('case-off')) {
              el.classList.remove('hidden');
            }
          }
        }
        if (e.shiftKey || this.shift === 'on') {
          if (this.capslock === 'off') {
            el.classList.add('hidden');
            if (el.classList.contains('shift')) {
              el.classList.remove('hidden');
            }
          }
          if (this.capslock === 'on') {
            el.classList.add('hidden');
            if (shiftDataSet.includes(elem.dataset.code)) {
              if (el.classList.contains('shift')) {
                el.classList.remove('hidden');
              }
            } else if (el.classList.contains('case-off')) {
              el.classList.remove('hidden');
            }
          }
        }
      });
    });
  }

  /* end virtual keyboard visual functions */

  /* virtual keyboard main functions */
  setKeyboardTextareaFocus() {
    this.textarea = document.getElementById('input');
    this.textarea.focus();
  }

  getKeyboardItemInnerText(item) {
    this.item = item;
    return item.innerText || ' ';
  }

  setKeyboardItemInnerTextToTextarea(item) {
    this.textarea.setRangeText(this.getKeyboardItemInnerText(item),
      this.textarea.selectionStart, this.textarea.selectionEnd, 'end');
  }

  processingEnterKeyboardItem() {
    this.textarea.setRangeText('\n',
      this.textarea.selectionStart, this.textarea.selectionEnd, 'end');
  }

  processingTabKeyboardItem() {
    this.textarea.setRangeText('    ',
      this.textarea.selectionStart, this.textarea.selectionEnd, 'end');
  }

  processingDeleteBackspaceKeyboardItem(keyboardItem) {
    const cursorPositionPointer = (keyboardItem === 'Delete') ? 0 : 1;
    const textarea = [...this.textarea.value];
    const { selectionStart } = this.textarea;
    textarea.splice(this.textarea.selectionStart - cursorPositionPointer, 1);
    this.textarea.value = textarea.join('');
    this.textarea.selectionStart = selectionStart - cursorPositionPointer;
    this.textarea.selectionEnd = selectionStart - cursorPositionPointer;
  }

  processingArrowKeyboardItem(arrow) {
    const { selectionStart } = this.textarea;
    if (arrow === 'ArrowLeft') {
      this.textarea.selectionStart = selectionStart - 1;
      this.textarea.selectionEnd = selectionStart - 1;
    }
    if (arrow === 'ArrowRight') {
      this.textarea.selectionStart = selectionStart + 1;
      this.textarea.selectionEnd = selectionStart + 1;
    }
    if (arrow === 'ArrowUp') {
      this.textarea.selectionStart = 0;
      this.textarea.selectionEnd = 0;
    }
    if (arrow === 'ArrowDown') {
      this.textarea.selectionStart = this.textarea.value.length;
      this.textarea.selectionEnd = this.textarea.value.length;
    }
  }
  /* end virtual keyboar main functions */
}

export { VirtualKeyboard as default };
