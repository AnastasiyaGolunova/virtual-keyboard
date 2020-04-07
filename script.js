
const keyEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'return',
    'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'shift',
    'ctrl', 'alt', ' ', 'alt', '←', '↓', '→', 'ctrl'];


const createDOM = () => {
    const main = document.createElement('main');
    document.body.appendChild(main);

    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);
    container.setAttribute('style', 'width: 600px; height: 400px; margin-left: auto; margin-right: auto;');

    const display = document.createElement('div');
    display.classList.add('display');
    container.appendChild(display);
    display.setAttribute('style', 'width: 100%');

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    display.appendChild(textarea);
    textarea.setAttribute('style', 'width: 600px; height: 200px; font-size: 0;');

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    container.appendChild(keyboard);
    keyboard.setAttribute('style', 'width: 600px; height: 200px; font-size: 0; display: flex; flex-wrap: wrap; justify-content: space-between;');

    const createKeys = () => {
        keyEn.forEach((item) => {
            const button = document.createElement('button');
            button.classList.add('button');
            if (item === 'ShiftLeft' || item === 'ShiftRight' || item === 'Tab'
                || item === 'Backspace' || item === 'Enter' || item === 'CapsLock') {
                button.classList.add('wide');
               // button.setAttribute('style', 'width: 90px; height: 60px; background-color: #666d89;');
            } else if (item === 'Space') {
                button.classList.add('doublewide');
                // button.setAttribute('style', 'width: 180px; height: 60px; background-color: #666d89;');
            }
            keyboard.appendChild(button);
            button.setAttribute('style', 'width: auto; height: 30px; background-color: #666d89; margin-left: 7px;');
        });
    };
    createKeys();

};
createDOM();

const button = document.querySelectorAll('button');

const addKeysLabels = (list) => {
    button.forEach((butt, i) => {
        butt.setAttribute('key', list[i]);
        butt.innerText = butt.getAttribute('key');
    });
};
addKeysLabels(keyEn);

