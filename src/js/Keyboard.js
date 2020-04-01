class Keyboard {
  constructor(lang) {
    this.lang = lang;
  }

  generateKeyboardTemaplate() {
    const keyboardTemplate = `
    <div class="wrapper">
    <form action="#" class="input">
        <textarea name="input__area" id="input" cols="100" rows="10">
        </textarea>
    </form>
    <section id="keyboard" class="keyboard">
        <h1 class="keyboard__title">Virtual Keyboard</h1> 
        <div class="keyboard__lang"><span>${this.lang}</span></div>
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
}

export { Keyboard as default };
