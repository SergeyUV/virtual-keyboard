class cVKeyboard {

  constructor(){
    this.vKeyboardRows = 5;
    this.lang = 'en';
    this.leftShiftPressed = 0; //0 - not pressed, 0 - pressed;
    this.rightShiftPressed = 0; //0 - not pressed, 0 - pressed;
    this.ctlPressed = 0;
    this.altPressed = 0;
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
             ['Minus','-'], ['Equal','='], ['Backspace','Backspace','Backspace'], ['Tab','Tab','Tab'], ['KeyQ','q'], ['KeyW','w'],    
             ['KeyE','e'], ['KeyR','r'], ['KeyT','t'], ['KeyY','y'], ['KeyU','u'], ['KeyI','i'], ['KeyO','o'],
             ['KeyP','p'], ['BracketLeft','['], ['BracketRight',']'], ['Backslash','\\','|'], ['Delete', 'Del','Del'],
             ['CapsLock','Caps','Caps'], ['KeyA','a'], ['KeyS','s'], ['KeyD','d'], ['KeyF','f'], ['KeyG','g'], ['KeyH','h'],
             ['KeyJ','j'], ['KeyK','k'], ['KeyL','l'], ['Semicolon',':'], ['Quote','\''], ['Enter','Enter', 'Enter'],
             ['ShiftLeft','Shift','Shift'], ['KeyZ','z'], ['KeyX','x'],['KeyC','c'], ['KeyV','v'], ['KeyB','b'], ['KeyN','n'],
             ['KeyM', 'm'], ['Comma',',','<'], ['Period','.','>'], ['Slash','/','?'], ['ArrowUp','up','up'], ['ShiftRight', 'Shift','Shift'],
             ['ControlLeft','Ctrl','Ctrl'], ['AltLeft','Alt','Alt'], ['Space', ' '], ['AltRight', 'Alt','Alt'], ['ControlRight', 'Ctrl','Ctrl'],
             ['ArrowLeft','left','left'], ['ArrowDown', 'down','down'], ['ArrowRight', 'right','right']
            ],
        
      };
    
    this.specKeysFunctions = {
      ShiftLeft: {
        down: () => {
     
          if(this.leftShiftPressed === 0){
            this.leftShiftPressed = 1;
          }
          
          if(this.leftShiftPressed === 1){
            this.retextKeys();
          }
        },
        
        up: () => {

          if(this.leftShiftPressed === 1){
            this.leftShiftPressed = 0;
          }

          if(this.leftShiftPressed === 0){
            this.retextKeys();
          }
        }
      },
      
      ShiftRight: {
        down: () => {
     
          if(this.leftShiftPressed === 0){
            this.leftShiftPressed = 1;
          }
          
          if(this.leftShiftPressed === 1){
            this.retextKeys();
          }
        },
        
        up: () => {
          
          if(this.leftShiftPressed === 1){
            this.leftShiftPressed = 0;
          }

          if(this.leftShiftPressed === 0){
            this.retextKeys();
          }
        }
      }
    }
    this.makeDOM();
  }

  makeDOM() {
    
    this.elText = this.addDomElement('textArea','myInputArea');
    //this.elText.addEventListener('keydown',this.keyDownEventListener);
    //this.elText.addEventListener('keyup',this.keyUpEventListener);
    this.elText.addEventListener('keydown',this.keyDownEventListener.bind(this));
    this.elText.addEventListener('keyup',this.keyUpEventListener.bind(this));
    
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
      }
    }
    this.retextKeys();
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

  retextKeys(){
    let vKeys = document.getElementsByClassName('vKey');
    let keyTexts = this.keyboardLangs[this.lang];
    let keyText;
    const shiftPressed =  this.leftShiftPressed || this.rightShiftPressed;    
    for(let i = 0; i< vKeys.length; i++){
      let keyCode = vKeys[i].id.split('_')[1];
      
      keyText = keyTexts.find((item)=>{ 
        if(item[0] == keyCode){ return true; } 
        return false;
      });

      vKeys[i].innerText = (keyText[1+shiftPressed])?keyText[1+shiftPressed] : 
                            (shiftPressed == 1)? vKeys[i].innerText.toUpperCase() :vKeys[i].innerText.toLowerCase()  ;
    }

  }
  
  keyDownEventListener(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);
    if(vKey){
      vKey.classList.add('pressedKey');
    }
    
    if (evt.code in this.specKeysFunctions){
      this.specKeysFunctions[evt.code].down();
    }
    //console.log(evt.code);
    evt.preventDefault();
  }

  keyUpEventListener(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);
    if(vKey){
      vKey.classList.remove('pressedKey');
    }

    if (evt.code in this.specKeysFunctions){
      this.specKeysFunctions[evt.code].up();
    }
    evt.preventDefault();
    
  }

}

const vKeyboard = new cVKeyboard();

