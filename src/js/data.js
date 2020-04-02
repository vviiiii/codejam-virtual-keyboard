const keys = [
  {
    code: 'Backquote',
    lang: {
      ru: {
        caseOnKey: 'Ё',
        caseOffKey: 'ё',
        shift: 'Ё',
      },
      en: {
        caseOnKey: '`',
        caseOffKey: '`',
        shift: '~',
      },
    },
  },
  {
    code: 'Digit1',
    lang: {
      ru: {
        caseOnKey: '1',
        caseOffKey: '1',
        shift: '!',
      },
      en: {
        caseOnKey: '1',
        caseOffKey: '1',
        shift: '!',
      },
    },
  },
  {
    code: 'Digit2',
    lang: {
      ru: {
        caseOnKey: '2',
        caseOffKey: '2',
        shift: '"',
      },
      en: {
        caseOnKey: '2',
        caseOffKey: '2',
        shift: '@',
      },
    },
  },
  {
    code: 'Digit3',
    lang: {
      ru: {
        caseOnKey: '3',
        caseOffKey: '3',
        shift: '№',
      },
      en: {
        caseOnKey: '3',
        caseOffKey: '3',
        shift: '#',
      },
    },
  },
  {
    code: 'Digit4',
    lang: {
      ru: {
        caseOnKey: '4',
        caseOffKey: '4',
        shift: ';',
      },
      en: {
        caseOnKey: '4',
        caseOffKey: '4',
        shift: '$',
      },
    },
  },
  {
    code: 'Digit5',
    lang: {
      ru: {
        caseOnKey: '5',
        caseOffKey: '5',
        shift: '%',
      },
      en: {
        caseOnKey: '5',
        caseOffKey: '5',
        shift: '%',
      },
    },
  },
  {
    code: 'Digit6',
    lang: {
      ru: {
        caseOnKey: '6',
        caseOffKey: '6',
        shift: ':',
      },
      en: {
        caseOnKey: '6',
        caseOffKey: '6',
        shift: '^',
      },
    },
  },
  {
    code: 'Digit7',
    lang: {
      ru: {
        caseOnKey: '7',
        caseOffKey: '7',
        shift: '&',
      },
      en: {
        caseOnKey: '7',
        caseOffKey: '7',
        shift: '?',
      },
    },
  },
  {
    code: 'Digit8',
    lang: {
      ru: {
        caseOnKey: '8',
        caseOffKey: '8',
        shift: '*',
      },
      en: {
        caseOnKey: '8',
        caseOffKey: '8',
        shift: '*',
      },
    },
  },
  {
    code: 'Digit9',
    lang: {
      ru: {
        caseOnKey: '9',
        caseOffKey: '9',
        shift: '(',
      },
      en: {
        caseOnKey: '9',
        caseOffKey: '9',
        shift: '(',
      },
    },
  },
  {
    code: 'Digit0',
    lang: {
      ru: {
        caseOnKey: '0',
        caseOffKey: '0',
        shift: ')',
      },
      en: {
        caseOnKey: '0',
        caseOffKey: '0',
        shift: ')',
      },
    },
  },
  {
    code: 'Minus',
    lang: {
      ru: {
        caseOnKey: '-',
        caseOffKey: '-',
        shift: '_',
      },
      en: {
        caseOnKey: '-',
        caseOffKey: '-',
        shift: '_',
      },
    },
  },
  {
    code: 'Equal',
    lang: {
      ru: {
        caseOnKey: '=',
        caseOffKey: '=',
        shift: '+',
      },
      en: {
        caseOnKey: '=',
        caseOffKey: '=',
        shift: '+',
      },
    },
  },
  {
    code: 'Backspace',
    lang: {
      ru: {
        caseOnKey: 'Backspace',
        caseOffKey: 'Backspace',
      },
      en: {
        caseOnKey: 'Backspace',
        caseOffKey: 'Backspace',
      },
    },
  },
  {
    code: 'Tab',
    lang: {
      ru: {
        caseOnKey: 'Tab',
        caseOffKey: 'Tab',
      },
      en: {
        caseOnKey: 'Tab',
        caseOffKey: 'Tab',
      },
    },
  },
  {
    code: 'KeyQ',
    lang: {
      ru: {
        caseOnKey: 'Й',
        caseOffKey: 'й',
      },
      en: {
        caseOnKey: 'Q',
        caseOffKey: 'q',
      },
    },
  },
  {
    code: 'KeyW',
    lang: {
      ru: {
        caseOnKey: 'Ц',
        caseOffKey: 'ц',
      },
      en: {
        caseOnKey: 'W',
        caseOffKey: 'w',
      },
    },
  },
  {
    code: 'KeyE',
    lang: {
      ru: {
        caseOnKey: 'У',
        caseOffKey: 'у',
      },
      en: {
        caseOnKey: 'E',
        caseOffKey: 'e',
      },
    },
  },
  {
    code: 'KeyR',
    lang: {
      ru: {
        caseOnKey: 'К',
        caseOffKey: 'к',
      },
      en: {
        caseOnKey: 'R',
        caseOffKey: 'r',
      },
    },
  },
  {
    code: 'KeyT',
    lang: {
      ru: {
        caseOnKey: 'Е',
        caseOffKey: 'е',
      },
      en: {
        caseOnKey: 'T',
        caseOffKey: 't',
      },
    },
  },
  {
    code: 'KeyY',
    lang: {
      ru: {
        caseOnKey: 'Н',
        caseOffKey: 'н',
      },
      en: {
        caseOnKey: 'Y',
        caseOffKey: 'y',
      },
    },
  },
  {
    code: 'KeyU',
    lang: {
      ru: {
        caseOnKey: 'Г',
        caseOffKey: 'г',
      },
      en: {
        caseOnKey: 'U',
        caseOffKey: 'u',
      },
    },
  },
  {
    code: 'KeyI',
    lang: {
      ru: {
        caseOnKey: 'Ш',
        caseOffKey: 'ш',
      },
      en: {
        caseOnKey: 'I',
        caseOffKey: 'i',
      },
    },
  },
  {
    code: 'KeyO',
    lang: {
      ru: {
        caseOnKey: 'Щ',
        caseOffKey: 'щ',
      },
      en: {
        caseOnKey: 'O',
        caseOffKey: 'o',
      },
    },
  },
  {
    code: 'KeyP',
    lang: {
      ru: {
        caseOnKey: 'З',
        caseOffKey: 'з',
      },
      en: {
        caseOnKey: 'P',
        caseOffKey: 'p',
      },
    },
  },
  {
    code: 'BracketLeft',
    lang: {
      ru: {
        caseOnKey: 'Х',
        caseOffKey: 'х',
      },
      en: {
        caseOnKey: '{',
        caseOffKey: '[',
      },
    },
  },
  {
    code: 'BracketRight',
    lang: {
      ru: {
        caseOnKey: 'Ъ',
        caseOffKey: 'ъ',
      },
      en: {
        caseOnKey: '}',
        caseOffKey: ']',
      },
    },
  },
  {
    code: 'Backslash',
    lang: {
      ru: {
        caseOnKey: '/',
        caseOffKey: '\\',
      },
      en: {
        caseOnKey: '|',
        caseOffKey: '\\',
      },
    },
  },
  {
    code: 'Delete',
    lang: {
      ru: {
        caseOnKey: 'Del',
        caseOffKey: 'Del',
      },
      en: {
        caseOnKey: 'Del',
        caseOffKey: 'Del',
      },
    },
  },
  {
    code: 'CapsLock',
    lang: {
      ru: {
        caseOnKey: 'CapsLock',
        caseOffKey: 'CapsLock',
      },
      en: {
        caseOnKey: 'CapsLock',
        caseOffKey: 'CapsLock',
      },
    },
  },
  {
    code: 'KeyA',
    lang: {
      ru: {
        caseOnKey: 'Ф',
        caseOffKey: 'ф',
      },
      en: {
        caseOnKey: 'A',
        caseOffKey: 'a',
      },
    },
  },
  {
    code: 'KeyS',
    lang: {
      ru: {
        caseOnKey: 'Ы',
        caseOffKey: 'ы',
      },
      en: {
        caseOnKey: 'S',
        caseOffKey: 's',
      },
    },
  },
  {
    code: 'KeyD',
    lang: {
      ru: {
        caseOnKey: 'В',
        caseOffKey: 'в',
      },
      en: {
        caseOnKey: 'D',
        caseOffKey: 'd',
      },
    },
  },
  {
    code: 'KeyF',
    lang: {
      ru: {
        caseOnKey: 'А',
        caseOffKey: 'а',
      },
      en: {
        caseOnKey: 'F',
        caseOffKey: 'f',
      },
    },
  },
  {
    code: 'KeyG',
    lang: {
      ru: {
        caseOnKey: 'П',
        caseOffKey: 'п',
      },
      en: {
        caseOnKey: 'G',
        caseOffKey: 'g',
      },
    },
  },
  {
    code: 'KeyH',
    lang: {
      ru: {
        caseOnKey: 'Р',
        caseOffKey: 'р',
      },
      en: {
        caseOnKey: 'H',
        caseOffKey: 'h',
      },
    },
  },
  {
    code: 'KeyJ',
    lang: {
      ru: {
        caseOnKey: 'О',
        caseOffKey: 'о',
      },
      en: {
        caseOnKey: 'J',
        caseOffKey: 'j',
      },
    },
  },
  {
    code: 'KeyK',
    lang: {
      ru: {
        caseOnKey: 'Л',
        caseOffKey: 'л',
      },
      en: {
        caseOnKey: 'K',
        caseOffKey: 'k',
      },
    },
  },
  {
    code: 'KeyL',
    lang: {
      ru: {
        caseOnKey: 'Д',
        caseOffKey: 'д',
      },
      en: {
        caseOnKey: 'L',
        caseOffKey: 'l',
      },
    },
  },
  {
    code: 'Semicolon',
    lang: {
      ru: {
        caseOnKey: 'Ж',
        caseOffKey: 'ж',
      },
      en: {
        caseOnKey: ':',
        caseOffKey: ';',
      },
    },
  },
  {
    code: 'Quote',
    lang: {
      ru: {
        caseOnKey: 'Э',
        caseOffKey: 'э',
      },
      en: {
        caseOnKey: '"',
        caseOffKey: '\'',
      },
    },
  },
  {
    code: 'Enter',
    lang: {
      ru: {
        caseOnKey: 'Enter',
        caseOffKey: 'Enter',
      },
      en: {
        caseOnKey: 'Enter',
        caseOffKey: 'Enter',
      },
    },
  },
  {
    code: 'ShiftLeft',
    lang: {
      ru: {
        caseOnKey: 'Shift',
        caseOffKey: 'Shift',
      },
      en: {
        caseOnKey: 'Shift',
        caseOffKey: 'Shift',
      },
    },
  },
  {
    code: 'KeyZ',
    lang: {
      ru: {
        caseOnKey: 'Я',
        caseOffKey: 'я',
      },
      en: {
        caseOnKey: 'Z',
        caseOffKey: 'z',
      },
    },
  },
  {
    code: 'KeyX',
    lang: {
      ru: {
        caseOnKey: 'Ч',
        caseOffKey: 'ч',
      },
      en: {
        caseOnKey: 'X',
        caseOffKey: 'x',
      },
    },
  },
  {
    code: 'KeyC',
    lang: {
      ru: {
        caseOnKey: 'С',
        caseOffKey: 'с',
      },
      en: {
        caseOnKey: 'C',
        caseOffKey: 'c',
      },
    },
  },
  {
    code: 'KeyV',
    lang: {
      ru: {
        caseOnKey: 'М',
        caseOffKey: 'м',
      },
      en: {
        caseOnKey: 'V',
        caseOffKey: 'v',
      },
    },
  },
  {
    code: 'KeyB',
    lang: {
      ru: {
        caseOnKey: 'И',
        caseOffKey: 'и',
      },
      en: {
        caseOnKey: 'B',
        caseOffKey: 'b',
      },
    },
  },
  {
    code: 'KeyN',
    lang: {
      ru: {
        caseOnKey: 'Т',
        caseOffKey: 'т',
      },
      en: {
        caseOnKey: 'N',
        caseOffKey: 'n',
      },
    },
  },
  {
    code: 'KeyM',
    lang: {
      ru: {
        caseOnKey: 'Ь',
        caseOffKey: 'ь',
      },
      en: {
        caseOnKey: 'M',
        caseOffKey: 'm',
      },
    },
  },
  {
    code: 'Comma',
    lang: {
      ru: {
        caseOnKey: 'Б',
        caseOffKey: 'б',
      },
      en: {
        caseOnKey: '<',
        caseOffKey: ',',
      },
    },
  },
  {
    code: 'Period',
    lang: {
      ru: {
        caseOnKey: 'Ю',
        caseOffKey: 'ю',
      },
      en: {
        caseOnKey: '>',
        caseOffKey: '.',
      },
    },
  },
  {
    code: 'ArrowUp',
    lang: {
      ru: {
        caseOnKey: '▲',
        caseOffKey: '▲',
      },
      en: {
        caseOnKey: '▲',
        caseOffKey: '▲',
      },
    },
  },
  {
    code: 'Slash',
    lang: {
      ru: {
        caseOnKey: ',',
        caseOffKey: '.',
      },
      en: {
        caseOnKey: '?',
        caseOffKey: '/',
      },
    },
  },
  {
    code: 'ShiftRight',
    lang: {
      ru: {
        caseOnKey: 'Shift',
        caseOffKey: 'Shift',
      },
      en: {
        caseOnKey: 'Shift',
        caseOffKey: 'Shift',
      },
    },
  },
  {
    code: 'ControlLeft',
    lang: {
      ru: {
        caseOnKey: 'Ctrl',
        caseOffKey: 'Ctrl',
      },
      en: {
        caseOnKey: 'Ctrl',
        caseOffKey: 'Ctrl',
      },
    },
  },
  {
    code: 'AltLeft',
    lang: {
      ru: {
        caseOnKey: 'Alt',
        caseOffKey: 'Alt',
      },
      en: {
        caseOnKey: 'Alt',
        caseOffKey: 'Alt',
      },
    },
  },
  {
    code: 'Space',
    lang: {
      ru: {
        caseOnKey: ' ',
        caseOffKey: ' ',
      },
      en: {
        caseOnKey: ' ',
        caseOffKey: ' ',
      },
    },
  },
  {
    code: 'AltRight',
    lang: {
      ru: {
        caseOnKey: 'Alt',
        caseOffKey: 'Alt',
      },
      en: {
        caseOnKey: 'Alt',
        caseOffKey: 'Alt',
      },
    },
  },
  {
    code: 'MetaLeft',
    lang: {
      ru: {
        caseOnKey: '❖',
        caseOffKey: '❖',
      },
      en: {
        caseOnKey: '❖',
        caseOffKey: '❖',
      },
    },
  },
  {
    code: 'ArrowLeft',
    lang: {
      ru: {
        caseOnKey: '◄',
        caseOffKey: '◄',
      },
      en: {
        caseOnKey: '◄',
        caseOffKey: '◄',
      },
    },
  },
  {
    code: 'ArrowDown',
    lang: {
      ru: {
        caseOnKey: '▼',
        caseOffKey: '▼',
      },
      en: {
        caseOnKey: '▼',
        caseOffKey: '▼',
      },
    },
  },
  {
    code: 'ArrowRight',
    lang: {
      ru: {
        caseOnKey: '►',
        caseOffKey: '►',
      },
      en: {
        caseOnKey: '►',
        caseOffKey: '►',
      },
    },
  },
  {
    code: 'ControlRight',
    lang: {
      ru: {
        caseOnKey: 'Ctrl',
        caseOffKey: 'Ctrl',
      },
      en: {
        caseOnKey: 'Ctrl',
        caseOffKey: 'Ctrl',
      },
    },
  },

];

export { keys as default };
