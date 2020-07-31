'use strict';

const keyEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
    'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'shift',
    'ctrl', 'alt', ' ', 'alt', '←', '↓', '→', 'ctrl'];

const main = document.createElement('main');
document.body.appendChild(main);
const container = document.createElement('div');
container.classList.add('container');
main.appendChild(container);
const display = document.createElement('div');
display.classList.add('display');
container.appendChild(display);
let textarea = document.createElement('textarea');
textarea.classList.add('textarea');
display.appendChild(textarea);
textarea.rows = 10;
textarea.cols = 80;
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);
const createKeys = () => {
    keyEn.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add('button');
        button.style.width = 'auto';
        keyboard.appendChild(button);
    })
}
createKeys();
const btn = document.querySelectorAll('.button');
const addKeysLabels = (list) => {
    btn.forEach((butt, i) => {
        butt.setAttribute('key', list[i]);
        butt.innerText = butt.getAttribute('key');
    });
};
addKeysLabels(keyEn);
function searchInKeyboard(code) {
    for (let i = 0; i < keyEn.length; i++) {
        if (code === keyEn[i]) return keyEn[i];
    }
}

document.addEventListener('keydown', function (event) {
    textarea.innerHTML = event.key;
    if (btn.event === 'backspace' || btn.event === 'tab' || btn.event === 'caps lock' || btn.event === 'shift' || btn.event === '' || btn.event === 'enter') {
        let textarea = textarea.value;
        if (event.key === 'Backspace') {
            document.querySelector('.textarea').textContent = textarea.slice(0, -1);
        }
        if (event.key === 'Tab') {
            document.querySelector('.textarea').textContent += "    ";
        }
        if (btn.event === 'Enter') {
            document.querySelector('.textarea').textContent += "/n";
        }
        if (btn.event === '') {
            document.querySelector('.textarea').textContent += " ";
        } else {
            if (btn.event === 'capslock'){
                btn.event.toUpperCase();
            }
            document.querySelector('.textarea').textContent += searchInKeyboard(btn);
        }
    }
})

document.querySelectorAll('.button').forEach((element) => {
    element.onclick = function (event) {
        document.querySelectorAll('.button').forEach(function (element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('key');
        this.classList.add("active");
        setTimeout(() => this.classList.remove("active"), 300);
        let keys = searchInKeyboard(code);
        if (code === "backspace") {
            let str = document.querySelector('.textarea').textContent;
            document.querySelector('.textarea').textContent = str.slice(0, -1);
        } else if (code === "tab") {
            document.querySelector('.textarea').textContent += "    ";
        } else if (code === "caps lock") {
            document.querySelector('.textarea').textContent += searchInKeyboard(code).toUpperCase();
        } else if (code === "ctrl" ||
            code === "shift" ||
            code === "alt") {
            return;
        } else if (code === "enter") {
            document.querySelector('.textarea').textContent += "\n";
        } else {
            document.querySelector('.textarea').textContent += keys;
        }
    }
});
