const virtualKeyButtonModule = require('./VirtualKeyboardItem');

const KeyboardItem = virtualKeyButtonModule.default;

class VirtualKeyboard {
  constructor(lang, data) {
    this.lang = lang;
    this.data = data;
    this.capslock = 'off';
    this.shift = 'off';
  }

  /* main function */
  buildKeyboard() {
    this.renderKeyboardTemaplate();
    this.renderKeyboardRowsTemplate();
    this.bindEventsHandlers();
    // console.info(this);
  }

  /* render functions */
  generateKeyboardTemaplate() {
    const keyboardTemplate = `
    <div class="wrapper">
        <form action="#" class="input">
            <textarea name="input__area" id="input" cols="100" rows="10"></textarea>
        </form>
        <section id="keyboard" class="keyboard">
            <h1 class="keyboard__title">Virtual Keyboard создавалась в OS Windows: Переключение языка LeftCtrl+LeftAlt</h1> 
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
    const keyboardItems = [];
    this.data.forEach((keyButton) => {
      const keyboardItem = new KeyboardItem(keyButton);
      keyboardItems.push(keyboardItem.generateKeyboardItemTemplate());
    });
    return keyboardItems;
  }

  generateKeyboardRowsContent() {
    const keyboardItems = this.generateKeyboardItemsTemaplate();
    const keyboardRow1 = keyboardItems.slice(0, 14);
    const keyboardRow2 = keyboardItems.slice(14, 29);
    const keyboardRow3 = keyboardItems.slice(29, 42);
    const keyboardRow4 = keyboardItems.slice(42, 55);
    const keyboardRow5 = keyboardItems.slice(55, 64);

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
    const keyboard = document.getElementById('keyboard');
    keyboard.addEventListener('mousedown', (e) => this.mouseDownKeyboardItem(e));
  }

  addKeyboardMouseUpHandler() {
    const keyboard = document.getElementById('keyboard');
    keyboard.addEventListener('mouseup', (e) => this.mouseUpKeyboardItem(e));
  }

  /* end event handlers functions */

  /* handlers callback functions */
  pressKeyboardItemDown(e) {
    e.preventDefault();
    this.setKeyboardTextareaFocus();
    const keyboardItems = document.querySelectorAll('.keyboard__item');
    const pressedKeyboardItem = [...keyboardItems].find((elem) => {
      if (elem.dataset.code === e.code) {
        return elem;
      }
      return undefined;
    });

    // console.log(this);
    // console.log(e);

    this.addActiveClassToKeyboardItem(pressedKeyboardItem);
    switch (e.code) {
      case 'Backspace':
        this.processingBackspaceKeyboardItem();
        break;
      case 'ControlLeft':
        if (e.altKey && e.ctrlKey) {
          this.changeKeyboardLanguage(keyboardItems);
        }
        break;
      case 'ShiftLeft':
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, keyboardItems);
        }
        break;
      case 'CapsLock':
        this.toggleActiveClassCapsLockKeyboardItem(pressedKeyboardItem);
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, keyboardItems);
        }
        break;
      case 'Tab':
        this.processingTabKeyboardItem();
        break;
      case 'Delete':
        break;
      case 'Enter':
        this.processingEnterKeyboardItem();
        break;
      case 'ShiftRight':
        break;
      case 'ControlRight':
        break;
      case 'MetaLeft':
        break;
      case 'AltRight':
        break;
      case 'AltLeft':
        if (e.altKey && e.ctrlKey) {
          this.changeKeyboardLanguage(keyboardItems);
        }
        break;
      default:
        this.setKeyboardItemInnerTextToTextarea(pressedKeyboardItem);
    }
  }

  pressKeyboardItemUp(e) {
    e.preventDefault();

    // console.log(this);
    // console.log(e);
    const keyboardItems = document.querySelectorAll('.keyboard__item');
    this.removeActiveClassFromKeyboardItems();
    switch (e.code) {
      case 'Backspace':
        break;
      case 'ControlLeft':
        break;
      case 'ShiftLeft':
        if (!e.repeat) {
          this.changeKeyboardItemsContent(e, keyboardItems);
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
    const keyboardItems = document.querySelectorAll('.keyboard__item');
    // console.log(this);
    // console.log(e);
    let clickedElement;
    if (e.target.classList.contains('keyboard__item')
        || e.target.classList.contains('key__content')) {
      if (e.target.classList.contains('keyboard__item')) {
        clickedElement = e.target;
      } else {
        clickedElement = e.target.closest('.keyboard__item');
      }
      this.addActiveClassToKeyboardItem(clickedElement);
      if (clickedElement.dataset.code === 'CapsLock') {
        this.toggleActiveClassCapsLockKeyboardItem(clickedElement);
      }
    }
  }

  mouseUpKeyboardItem(e) {
    e.preventDefault();
    // console.log(this);
    // console.log(e);
    if (e.target.classList.contains('keyboard__item') || e.target.classList.contains('key__content')) {
      this.removeActiveClassFromKeyboardItems();
    }
  }
  /* end handlers callback functions */


  /* virtual keyboard visual functions */
  addActiveClassToKeyboardItem(elem) {
    this.elem = elem;
    elem.classList.add('keyboard__item_active');
  }

  removeActiveClassFromKeyboardItems() {
    const keyboardItems = document.querySelectorAll('.keyboard__item');
    this.keyboardItems = keyboardItems;
    keyboardItems.forEach((elem) => {
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
    const keyboardLangIndicator = document.querySelector('.keyboard__lang > span');
    keyboardLangIndicator.innerHTML = this.lang;
    [...items].forEach((elem) => {
    //   console.error(elem.querySelectorAll('.key.lang-ru'));
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

  changeKeyboardItemsContent(e, items) {
    const shiftDataSet = ['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
      'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Minus', 'Equal', 'BracketLeft',
      'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash'];
    [...items].forEach((elem) => {
      // console.log(e);
      elem.querySelectorAll('.key__content').forEach((el) => {
        //   console.log(el);
        if (!e.shiftKey) {
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
        if (e.shiftKey) {
        //   console.log(elem.dataset);
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
    document.getElementById('input').focus();
  }

  getKeyboardItemInnerText(item) {
    this.item = item;
    return item.innerText || ' ';
  }

  setKeyboardItemInnerTextToTextarea(item) {
    const textarea = document.getElementById('input');
    textarea.value += this.getKeyboardItemInnerText(item);
  }

  processingEnterKeyboardItem() {
    const textarea = document.getElementById('input');
    this.textarea = textarea;
    textarea.value += '\n';
  }

  processingTabKeyboardItem() {
    const textarea = document.getElementById('input');
    this.textarea = textarea;
    textarea.value += '    ';
  }

  processingBackspaceKeyboardItem() {
    const textarea = document.getElementById('input');
    this.textarea = textarea;
    textarea.value = textarea.value.slice(0, -1);
  }
  /* end virtual keyboar main functions */
}

export { VirtualKeyboard as default };
