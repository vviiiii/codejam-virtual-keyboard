class KeyButton {
  constructor({ code, lang }) {
    this.code = code;
    this.langRu = lang.ru;
    this.langEn = lang.en;
  }

  generateContent() {
    let template = '';
    const div = document.createElement('div');
    div.className = 'keyboard__item';
    div.setAttribute('data-code', this.code);

    if (this.code) {
      template += `
        <span class="key lang-en hidden">
        <span class="key__case-on hidden">${this.langEn.caseOnKey}</span>
        <span class="key__case-off">${this.langEn.caseOffKey}</span>
        </span>
        <span class="key lang-ru ">
            <span class="key__case-on hidden">${this.langRu.caseOnKey}</span>
            <span class="key__case-off">${this.langRu.caseOffKey}</span>
        </span>
    `;
    }

    div.innerHTML = template;
    return div;
  }
}

export { KeyButton as default };
