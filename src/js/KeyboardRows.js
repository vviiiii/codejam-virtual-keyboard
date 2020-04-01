class KeyboardRows {
  constructor(className, keyButtons) {
    this.className = className;
    this.keyButtons = keyButtons;
  }

  getKeyboardRows() {
    const keyboardRows = document.querySelectorAll(this.className);
    return keyboardRows;
  }

  generateKeyboardRowsContent() {
    const keyboardRow1 = this.keyButtons.slice(0, 14);
    const keyboardRow2 = this.keyButtons.slice(14, 29);
    const keyboardRow3 = this.keyButtons.slice(29, 42);
    const keyboardRow4 = this.keyButtons.slice(42, 55);
    const keyboardRow5 = this.keyButtons.slice(55, 64);

    return {
      keyboardRow1,
      keyboardRow2,
      keyboardRow3,
      keyboardRow4,
      keyboardRow5,
    };
  }

  renderKeyboardRows() {
    const {
      keyboardRow1,
      keyboardRow2,
      keyboardRow3,
      keyboardRow4,
      keyboardRow5,
    } = this.generateKeyboardRowsContent();

    const keyboardRows = this.getKeyboardRows();

    keyboardRow1.forEach((button) => {
      keyboardRows[0].append(button.generateContent());
    });
    keyboardRow2.forEach((button) => {
      keyboardRows[1].append(button.generateContent());
    });
    keyboardRow3.forEach((button) => {
      keyboardRows[2].append(button.generateContent());
    });
    keyboardRow4.forEach((button) => {
      keyboardRows[3].append(button.generateContent());
    });
    keyboardRow5.forEach((button) => {
      keyboardRows[4].append(button.generateContent());
    });
  }
}

export { KeyboardRows as default };
