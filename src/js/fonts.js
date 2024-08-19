/**
 * loadFonts - checks if custom fonts are loaded, then load all together in a promise.
 * If user has  already done this, check session storage and skip this for subsequent pages.
 */
function loadFonts () {
    if (sessionStorage.fontsLoaded) {
        document.documentElement.classList.add('fonts-loaded');
        return;
    }

    if ('fonts' in document) {
        Promise.all([
          document.fonts.load('1em Bungee Spice'),
          document.fonts.load('1em Bungee Shade'),
          document.fonts.load('1em Shadows Into Light')
        ]).then(_ => {
          document.documentElement.classList.add('fonts-loaded')
        });
      }
}

loadFonts();
