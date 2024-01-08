/**
 *  kaso.rocks > main.js
 *	kaso.rocks | @kaceykaso
 *	GNU GPL 3.0 license
 */

/** Variables and things */
const btns = {
    "up": document.getElementById("d-up"),
    "left": document.getElementById("d-left"),
    "right": document.getElementById("d-right"),
    "down": document.getElementById("d-down"),
    "start": document.getElementById("start-btn"),
    "select": document.getElementById("select-btn"),
    "a": document.getElementById("a-btn"),
    "b": document.getElementById("b-btn")
}
const suprise = document.getElementById("suprise");
let code = [];


/** Clicks and clacks */
Object.keys(btns).forEach(key => {
    btns[key].addEventListener('click', () => {
        if (key !== "start") code.push(key);
    });
});

btns.start.addEventListener('click', () => {
    konamiGo(code);
    code = [];
});
/**
 * konamiGo: evaluates whether or not user has correctly entered the Komani code
 * @param {array} code - array of strings, containing button names
 * @returns string
 */
const konamiGo = (code) => {
    const correct = ["up","up","down","down","left","right","left","right","b","a"];
    if (code.length === correct.length && code.every((element, index) => element === correct[index])) {
        suprise.style.setProperty("display", "block");
    }
}

/**
 * If document ready, GOOOOOOOOOOOOOOO!
 */
const ready = (fn) => {
    if (document.readyState!== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
