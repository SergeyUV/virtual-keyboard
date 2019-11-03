class cVKeyboard {

  constructor(){
    this.vKeyboardRows = 5;
    this.lang = 'en';
    this.leftShiftPressed = false; 
    this.rightShiftPressed = false;
    this.leftCtrlPressed = false;
    this.altPressed = 0;
    this.caps = false;
    this.elText;
    const storedLang = sessionStorage.getItem('vKeyboardLang');
    if (storedLang){
      this.lang = storedLang;
    }
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
      { en: [['Backquote', '`', '~'], ['Digit1','1','!'], ['Digit2','2','@'], ['Digit3','3','#'], ['Digit4','4','$'], ['Digit5','5','%'],
             ['Digit6','6','^'], ['Digit7','7','&'], ['Digit8','8','*'], ['Digit9','9','('], ['Digit0','0',')'],
             ['Minus','-','_'], ['Equal','=','+'], ['Backspace','Backspace','Backspace'], ['Tab','Tab','Tab'], ['KeyQ','q'], ['KeyW','w'],    
             ['KeyE','e'], ['KeyR','r'], ['KeyT','t'], ['KeyY','y'], ['KeyU','u'], ['KeyI','i'], ['KeyO','o'],
             ['KeyP','p'], ['BracketLeft','[','{'], ['BracketRight',']','}'], ['Backslash','\\','|'], ['Delete', 'Del','Del'],
             ['CapsLock','Caps','Caps'], ['KeyA','a'], ['KeyS','s'], ['KeyD','d'], ['KeyF','f'], ['KeyG','g'], ['KeyH','h'],
             ['KeyJ','j'], ['KeyK','k'], ['KeyL','l'], ['Semicolon',';',':'], ['Quote','\'','"'], ['Enter','Enter', 'Enter'],
             ['ShiftLeft','Shift','Shift'], ['KeyZ','z'], ['KeyX','x'],['KeyC','c'], ['KeyV','v'], ['KeyB','b'], ['KeyN','n'],
             ['KeyM', 'm'], ['Comma',',','<'], ['Period','.','>'], ['Slash','/','?'], ['ArrowUp','up','up'], ['ShiftRight', 'Shift','Shift'],
             ['ControlLeft','Ctrl','Ctrl'], ['AltLeft','Alt','Alt'], 
             ['Space', 'Left CTRL + Left Shift  for language switch', 'Left CTRL + Left Shift  for language switch'], 
             ['AltRight', 'Alt','Alt'], ['ControlRight', 'Ctrl','Ctrl'],
             ['ArrowLeft','left','left'], ['ArrowDown', 'down','down'], ['ArrowRight', 'right','right']
            ],
        ru: [['Backquote', 'ё'], ['Digit1','1','!'], ['Digit2','2','"'], ['Digit3','3','№'], ['Digit4','4',';'], ['Digit5','5','%'],
            ['Digit6','6',':'], ['Digit7','7','?'], ['Digit8','8','*'], ['Digit9','9','('], ['Digit0','0',')'],
            ['Minus','-','_'], ['Equal','=','+'], ['Backspace','Backspace','Backspace'], ['Tab','Tab','Tab'], ['KeyQ','й'], ['KeyW','ц'],    
            ['KeyE','у'], ['KeyR','к'], ['KeyT','е'], ['KeyY','н'], ['KeyU','г'], ['KeyI','ш'], ['KeyO','щ'],
            ['KeyP','з'], ['BracketLeft','х'], ['BracketRight','ъ'], ['Backslash','\\','/'], ['Delete', 'Del','Del'],
            ['CapsLock','Caps','Caps'], ['KeyA','ф'], ['KeyS','ы'], ['KeyD','в'], ['KeyF','а'], ['KeyG','п'], ['KeyH','р'],
            ['KeyJ','о'], ['KeyK','л'], ['KeyL','д'], ['Semicolon','ж',], ['Quote','э',], ['Enter','Enter', 'Enter'],
            ['ShiftLeft','Shift','Shift'], ['KeyZ','я'], ['KeyX','ч'],['KeyC','с'], ['KeyV','м'], ['KeyB','и'], ['KeyN','т'],
            ['KeyM', 'ь'], ['Comma','б'], ['Period','ю'], ['Slash','.',','], ['ArrowUp','up','up'], ['ShiftRight', 'Shift','Shift'],
            ['ControlLeft','Ctrl','Ctrl'], ['AltLeft','Alt','Alt'], 
            ['Space', 'Left CTRL + Left Shift  for language switch', 'Left CTRL + Left Shift  for language switch'], 
            ['AltRight', 'Alt','Alt'], ['ControlRight', 'Ctrl','Ctrl'],
            ['ArrowLeft','left','left'], ['ArrowDown', 'down','down'], ['ArrowRight', 'right','right']
           ],


        
      };
    
    this.specKeysFunctions = {
      ShiftLeft: {
        down: (evt) => {
          this.setPressed(evt);
          if(this.leftCtrlPressed) {
            this.switchLang();
          }else{
            this.leftShiftPressed = true;
          }
          this.retextKeys();
        },
        
        up: (evt) => {
          this.setNoPressed(evt);
          this.leftShiftPressed = false;
          this.retextKeys();
        }
      },
      
      ShiftRight: {
        down: (evt) => {
          this.setPressed(evt);
          this.leftShiftPressed = true;
          this.retextKeys();
        },
        
        up: (evt) => {
          this.setNoPressed(evt);
          this.leftShiftPressed = false;
          this.retextKeys();
        }
      },

      CapsLock: {
        down: (evt) =>{
          const vKey = document.getElementById(`Key_${evt.code}`);
          this.caps = !this.caps;
          if(this.caps){
            vKey.classList.add('pressedKey');
          }else{
            vKey.classList.remove('pressedKey');
          }
          this.retextKeys();
        },
        up: (evt) => {

        }
      },

      ControlLeft:{
        down: (evt) => {
          this.setPressed(evt);
          this.leftCtrlPressed = true;
        },
        up: (evt) => {
          this.setNoPressed(evt);
          this.leftCtrlPressed = false;
        }
      },

      Tab: {
        down: (evt) => {
          this.setPressed(evt);
          if(evt.preventDefault){
            evt.preventDefault();
          };
        },
        
        up: (evt) => {
          this.setNoPressed(evt);
          this.putCharToText('    ');
          if(evt.preventDefault){
            evt.preventDefault();
          };
        }
      },
      Enter: {
        down: (evt) => {
          this.setPressed(evt);
        },
        up: (evt) => {
          this.setNoPressed(evt);
        },
        mouseClick: () =>{
          this.putCharToText('\n');
        }
      },
      Space:{         
        down: (evt) => {
          this.setPressed(evt);
        },
        up: (evt) => {
          this.setNoPressed(evt);
        },
        press: (evt) => {
          this.putCharToText(' ');
          if(evt.preventDefault){
            evt.preventDefault();
          };
        }

      },
      Backspace: {
        down: (evt) => {
          this.setPressed(evt);
        },
        up: (evt) => {
          this.setNoPressed(evt);
        },
        mouseClick: () =>{
          this.removeCharLeft();
        }
      },
      Delete: {
        down: (evt) => {
          this.setPressed(evt);
        },
        up: (evt) => {
          this.setNoPressed(evt);
        },
        mouseClick: () =>{
          this.removeCharRight();
        }
      }
    }
    
    this.makeDOM();
  }

  setPressed(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);
    if(vKey){
      vKey.classList.add('pressedKey');
    }
  }

  setNoPressed(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);
    if(vKey){
      vKey.classList.remove('pressedKey');
    }
  }

  makeDOM() {
    
    this.elText = this.addDomElement('textArea','myInputArea');
    
    this.elText.addEventListener('keydown',this.keyDownEventListener.bind(this));
    this.elText.addEventListener('keyup',this.keyUpEventListener.bind(this));
    this.elText.addEventListener('keypress',this.keyPressEventListener.bind(this));
    
    this.addDomElement('div','vKeyboard','vKeyboardId');
    
    for(let i = 0; i < this.vKeyboardRows; i++){
      this.addDomElement('div', 'KeyboardRow',`vKeyboardRow${i}`,'vKeyboardId');
      
      for(let j = 0; j < this.keysProp[i].length; j++){
        const el = this.addDomElement('div', 'vKey', `Key_${this.keysProp[i][j].code}`, `vKeyboardRow${i}` );
        el.addEventListener('mousedown', this.onKeyMousedownEventListener.bind(this));
        el.addEventListener('mouseup', this.onKeyMouseupEventListener.bind(this));
        el.addEventListener('click', this.onKeyMouseclickEventListener.bind(this));  
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
    const shifted = this.myXOR(shiftPressed, this.caps);
    
    for(let i = 0; i< vKeys.length; i++){
      let keyCode = vKeys[i].id.split('_')[1];
      
      keyText = keyTexts.find((item)=>{ 
        if(item[0] == keyCode){ return true; } 
        return false;
      });

      vKeys[i].innerText = (keyText[1+shifted])?keyText[1+shifted] : 
                            (shifted)? vKeys[i].innerText.toUpperCase() :vKeys[i].innerText.toLowerCase()  ;
    }

  }
  
  switchLang(){
    const langs = Object.keys(this.keyboardLangs);
    let langIndex = langs.findIndex( item => item == this.lang);
    if(++langIndex >= langs.length){
      langIndex = 0;
    } 
    this.lang = langs[langIndex];
    sessionStorage.setItem('vKeyboardLang',this.lang);
  }

  keyDownEventListener(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);
      
    if ( (evt.code in this.specKeysFunctions) && ('down' in this.specKeysFunctions[evt.code]) ){
        this.specKeysFunctions[evt.code].down(evt);
    }else {
      if(vKey){
        vKey.classList.add('pressedKey');
      }
    }
  }

  keyUpEventListener(evt){
    const vKey = document.getElementById(`Key_${evt.code}`);

    if ((evt.code in this.specKeysFunctions) && ('up' in this.specKeysFunctions[evt.code])){
        this.specKeysFunctions[evt.code].up(evt);
    }else{
      if(vKey){
        vKey.classList.remove('pressedKey');
      }
    }
  }

  keyPressEventListener(evt){
    if (!(evt.code in this.specKeysFunctions)){
      const vKey = document.getElementById(`Key_${evt.code}`);
      this.putCharToText(vKey.innerText);
      if(evt.preventDefault){
        evt.preventDefault();
      };
    }else{
      if('press' in this.specKeysFunctions[evt.code]){
        this.specKeysFunctions[evt.code].press(evt);
      }
    }  
  }

  onKeyMousedownEventListener(evt){
    const evt_code = evt.srcElement.id.split('_')[1];
    this.keyDownEventListener({code: evt_code});
    if(evt.preventDefault){
      evt.preventDefault();
    };
  }
  
  onKeyMouseupEventListener(evt){
    const evt_code = evt.srcElement.id.split('_')[1];
    this.keyUpEventListener({code: evt_code});
    if(evt.preventDefault){
      evt.preventDefault();
    };
  }

   onKeyMouseclickEventListener(evt){
    const evt_code = evt.srcElement.id.split('_')[1];
    if( (evt_code in this.specKeysFunctions) && 'mouseClick' in this.specKeysFunctions[evt_code]){
      this.specKeysFunctions[evt_code].mouseClick();
    }else{
      this.keyPressEventListener({code: evt_code});
    }
    if(evt.preventDefault){
      evt.preventDefault();
    };
  }

  putCharToText(char){
    this.elText.value += char;
  }

  removeCharLeft(){
    console.log(typeof (this.elText.value));
  }
  
  removeCharRight(){
    console.log(typeof (this.elText.value));
  }
  myXOR (a, b){
    return ( a || b ) && !( a && b );
  }

}

const vKeyboard = new cVKeyboard();

