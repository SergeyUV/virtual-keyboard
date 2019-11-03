class cVKeyboard {

  constructor(){
    this.vKeyboardRows = 5;
    this.lang = 'en';
    this.shiftPressed = 0; //0 - not pressed, 1 - pressed;
    this.ctlPressed = 0;
    this.keysProp = [
      //row0
      [
        {
          code: 'Backquote'    
        },
        {
          code: 'Digit1'           
        },
        {
          code: 'Digit2'           
        },
        {
          code: 'Digit3'           
        },
        {
          code: 'Digit4'           
        },
        {
          code: 'Digit5'           
        },
        {
          code: 'Digit6'           
        },
        {
          code: 'Digit7'           
        },
        {
          code: 'Digit8'           
        },
        {
          code: 'Digit9'           
        },
        {
          code: 'Digit0'           
        },
        {
          code: 'Minus'           
        },
        {
          code: 'Equal'           
        },
        {
          code: 'Backspace',
          backgroundStyle: 'backgroundBlackStyle',
          width: '100px'
        }
      ],
      //row1
      [
        {
          code: 'Tab',
          width: '50px',
          backgroundStyle: 'backgroundBlackStyle',
        },
        {
          code: 'KeyQ'    
        },
        {
          code: 'KeyW'    
        },
        {
          code: 'KeyE'    
        },
        {
          code: 'KeyR'    
        },
        {
          code: 'KeyT'    
        },
        {
          code: 'KeyY'    
        },
        {
          code: 'KeyU'    
        },
        {
          code: 'KeyI'    
        },
        {
          code: 'KeyO'    
        },
        {
          code: 'KeyP'    
        },
        {
          code: 'BracketLeft'    
        },
        {
          code: 'BracketRight'    
        },
        {
          code: 'Backslash'    
        },
        {
          code: 'Delete',
          backgroundStyle: 'backgroundBlackStyle',
        }
      ],
      //row2
      [
        {
          code: 'CapsLock',
          width: '100px',
          backgroundStyle: 'backgroundBlackStyle',
        },
        {
          code: 'KeyA'    
        },
        {
          code: 'KeyS'    
        },
        {
          code: 'KeyD'    
        },
        {
          code: 'KeyF'    
        },
        {
          code: 'KeyG'    
        },
        {
          code: 'KeyH'    
        },
        {
          code: 'KeyJ'    
        },
        {
          code: 'KeyK'    
        },
        {
          code: 'KeyL'    
        },
        {
          code: 'Semicolon'    
        },
        {
          code: 'Quote'    
        },
        {
          code: 'Enter',
          width: '100px',
          backgroundStyle: 'backgroundBlackStyle',
        }
      ],
      //row3
      [
        {
          code: 'ShiftLeft',
          width: '100px',
          backgroundStyle: 'backgroundBlackStyle',
        },
        {
          code: 'KeyZ'    
        },
        {
          code: 'KeyX'    
        },
        {
          code: 'KeyC'    
        },
        {
          code: 'KeyV'    
        },
        {
          code: 'KeyB'    
        },
        {
          code: 'KeyN'    
        },
        {
          code: 'KeyM'    
        },
        {
          code: 'Comma'    
        },
        {
          code: 'Period'    
        },
        {
          code: 'Slash'    
        },
        {
          code: 'ArrowUp',
          backgroundStyle: 'backgroundBlackStyle',    
        },
        {
          code: 'ShiftRight',
          backgroundStyle: 'backgroundBlackStyle',   
        },
      ],
      //row4
      [
        {
          code: 'ControlLeft',
          backgroundStyle: 'backgroundBlackStyle',    
        },
        {
          code: 'AltLeft',
          backgroundStyle: 'backgroundBlackStyle',    
        },
        {
          code: 'Space',
          backgroundStyle: 'backgroundBlackStyle',
          width: '365px'    
        },
        {
          code: 'AltRight',
          backgroundStyle: 'backgroundBlackStyle',   
        },
        {
          code: 'ControlRight',
          backgroundStyle: 'backgroundBlackStyle',    
        },
        {
          code: 'ArrowLeft',
          backgroundStyle: 'backgroundBlackStyle',    
        },
        {
          code: 'ArrowDown',
          backgroundStyle: 'backgroundBlackStyle',  
        },
        {
          code: 'ArrowRight',
          backgroundStyle: 'backgroundBlackStyle',   
        }
        

      ]
    ];
    
    this.keyboardLangs = 
      { en: [['Backquote', '`', '~'], ['Digit1','1'], ['Digit2','2'], ['Digit3','3'], ['Digit4','4'], ['Digit5','5'],
             ['Digit6','6'], ['Digit7','7'], ['Digit8','8'], ['Digit9','9'], ['Digit0','0'],
             ['Minus','-'], ['Equal','='], ['Backspace','Backspace'], ['Tab','Tab'], ['KeyQ','q'], ['KeyW','w'],    
             ['KeyE','e'], ['KeyR','r'], ['KeyT','t'], ['KeyY','y'], ['KeyU','u'], ['KeyI','i'], ['KeyO','o'],
             ['KeyP','p'], ['BracketLeft','['], ['BracketRight',']'], ['Backslash','\\'], ['Delete', 'Del'],
             ['CapsLock','Caps'], ['KeyA','a'], ['KeyS','s'], ['KeyD','d'], ['KeyF','f'], ['KeyG','g'], ['KeyH','h'],
             ['KeyJ','j'], ['KeyK','k'], ['KeyL','l'], ['Semicolon',':'], ['Quote','\''], ['Enter','Enter'],
             ['ShiftLeft','Shift'], ['KeyZ','z'], ['KeyX','x'],['KeyC','c'], ['KeyV','v'], ['KeyB','b'], ['KeyN','n'],
             ['KeyM', 'm'], ['Comma',','], ['Period','.'], ['Slash','/'], ['ArrowUp','up'], ['ShiftRight', 'Shift'],
             ['ControlLeft','Ctrl'], ['AltLeft','Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ControlRight', 'Ctrl'],
             ['ArrowLeft','left'], ['ArrowDown', 'down'], ['ArrowRight', 'right']
            ],
      };
    
    this.makeDOM();
  }

  makeDOM() {
    
    this.elText = this.addDomElement('textArea','myInputArea');
    this.elText.addEventListener('keydown',this.keyDownEventListener);
    this.elText.addEventListener('keyup',this.keyUpEventListener);
    
    this.addDomElement('div','vKeyboard','vKeyboardId');
    
    for(let i = 0; i < this.vKeyboardRows; i++){
      this.addDomElement('div', 'KeyboardRow',`vKeyboardRow${i}`,'vKeyboardId');
      
      for(let j = 0; j < this.keysProp[i].length; j++){
        const el = this.addDomElement('div', 'vKey', `Key_${this.keysProp[i][j].code}`, `vKeyboardRow${i}` );
        
        if(Object.keys(this.keysProp[i][j]).indexOf('width') != -1){
          el.style.width = this.keysProp[i][j].width;
        }

        if(Object.keys(this.keysProp[i][j]).indexOf('backgroundStyle') != -1){
          el.classList.add(this.keysProp[i][j].backgroundStyle);
        }
        
        this.addKeyText(this.keysProp[i][j].code);
      }
    }
    this.elText.focus();
  }

  addDomElement(elTag, className = '', elId='', elParentId='bodyId', ...another_args ) {
    
    const el = document.createElement(elTag);
    el.classList.add(className);
    el.id = elId;
    const parent = document.getElementById(elParentId);
    parent.append(el);
    return el;
  }

  addKeyText(keyCode){
    debugger;
    let keyTexts = this.keyboardLangs[this.lang];
    let key = document.getElementsByClassName('vKey')[`Key_${keyCode}`];
    let keyLangTexts = keyTexts.find((item)=>{ 
      if(item[0] == keyCode){ return true; } 
      return false;
    });
    
    key.innerText = keyLangTexts[1+this.shiftPressed];
  }
  
  keyDownEventListener(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);
    if(vKey){
      vKey.classList.add('pressedKey');
    }
    console.log(evt.code);
    evt.preventDefault();
  }

  keyUpEventListener(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);
    if(vKey){
      vKey.classList.remove('pressedKey');
    }
    evt.preventDefault();
    
  }

}

const vKeyboard = new cVKeyboard();

