/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("Hello Dark Mode");

// globale declaraties:

var background = document.querySelector('main');
var message = document.querySelector('.active-mode-message');
var titles = document.querySelector('h3');
var text = document.querySelector('p');
var codeblocks = document.querySelector('pre code');
var buttonLightMode = document.querySelector('.light-mode');
var buttonDarkMode = document.querySelector('.dark-mode');

// eventHandlers


function checkMode() {
    var mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        message.textContent = 'Dark Mode';
        message.classList.add('dark');
        titles.classList.add('dark');
        text.classList.add('dark');
        codeblocks.classList.add('dark');
        background.classList.add('dark');


    } else if (mode === 'light') {
        message.textContent = 'Light Mode';
        message.classList.remove('dark');
        titles.classList.remove('dark');
        text.classList.remove('dark');
        codeblocks.classList.remove('dark');
        background.classList.remove('dark');
    } else {
        message.textContent = 'Default';
    }
}

function setLightMode() {
    localStorage.setItem('mode', 'light');
    checkMode();
    console.log("Light Mode");
}

function setDarkMode() {
    localStorage.setItem('mode', 'dark');
    checkMode();
    console.log("Dark Mode");
}

// eventListeners

buttonLightMode.addEventListener('click', setLightMode);
buttonDarkMode.addEventListener('click', setDarkMode);

checkMode();
