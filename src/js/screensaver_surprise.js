/**
 *  kaso.rocks > screensaver_surprise.js
 *	kaso.rocks | @kaceykaso
 *	GNU GPL 3.0 license
 */

// For MacPack screen
const screen = document.getElementById("macpack_promo_screensaver");

/**
 * If document ready, GOOOOOOOOOOOOOOO!
 */
window.onload = () => {
    setTimeout(() => {
        screen.classList.remove("screensaver__hide");
        console.log("Suprise! It's flying toasters!");
    }, 15000);
}

