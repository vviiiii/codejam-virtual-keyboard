class VirtualKeyboardItem {
  constructor({ code, lang }, keyboardLang) {
    this.code = code;
    this.lang = lang;
    this.keyboardLang = keyboardLang;
  }

  generateKeyboardItemTemplate() {
    let template = '';
    const div = document.createElement('div');
    div.className = 'keyboard__item';
    div.setAttribute('data-code', this.code);

    const hiddenMarkEn = this.keyboardLang === 'ru' ? 'hidden' : '';
    const hiddenMarkRu = this.keyboardLang === 'en' ? 'hidden' : '';
    if (this.code) {
      template = `
          <span class="key lang-en ${hiddenMarkEn}">
            <span class="key__content case-on hidden">${this.lang.en.caseOnKey}</span>
            <span class="key__content shift hidden">${this.lang.en.shift || this.lang.en.caseOnKey}</span>
            <span class="key__content case-off">${this.lang.en.caseOffKey}</span>
          </span>
          <span class="key lang-ru ${hiddenMarkRu}">
            <span class="key__content case-on hidden">${this.lang.ru.caseOnKey}</span>
            <span class="key__content shift hidden">${this.lang.ru.shift || this.lang.ru.caseOnKey}</span>
            <span class="key__content case-off">${this.lang.ru.caseOffKey}</span>
          </span>
      `;
    }

    div.innerHTML = template;
    return div;
  }
}

export { VirtualKeyboardItem as default };
