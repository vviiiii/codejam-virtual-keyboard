class KeyboardItem {
  constructor({ code, lang }) {
    this.code = code;
    this.lang = lang;
  }

  generateKeyboardItemTemplate() {
    let template = '';
    const div = document.createElement('div');
    div.className = 'keyboard__item';
    div.setAttribute('data-code', this.code);

    if (this.code) {
      template = `
          <span class="key lang-en hidden">
            <span class="key__content case-on hidden">${this.lang.en.caseOnKey}</span>
            <span class="key__content shift hidden">${this.lang.en.shift || this.lang.en.caseOnKey}</span>
            <span class="key__content case-off">${this.lang.en.caseOffKey}</span>
          </span>
          <span class="key lang-ru ">
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

export { KeyboardItem as default };
