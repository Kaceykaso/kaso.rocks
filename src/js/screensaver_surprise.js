/**
 *  kaso.rocks > screensaver_surprise.js
 *	kaso.rocks | @kaceykaso
 *	GNU GPL 3.0 license
 */

// For MacPack screen
const screen = document.getElementById("macpack_promo_screensaver");
const desktop = document.getElementById("macpack_promo_desktop");

/**
 * If document ready, GOOOOOOOOOOOOOOO!
 */
window.onload = () => {
    setTimeout(() => {
        screen.classList.remove("hide");
        desktop.classList.add("hide")
        console.log("Suprise! It's flying toasters!");
    }, 15000);
}

