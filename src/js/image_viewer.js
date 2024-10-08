/**
 *  kaso.rocks > image_viewer.js
 *	kaso.rocks | @kaceykaso
 *	GNU GPL 3.0 license
 */

const galleries = document.querySelectorAll("div.img__gallery");

if (galleries) {
  galleries.forEach((gallery) => {
    const images = gallery.querySelectorAll("div.img__gallery__image");
    
    images.forEach((image, index) => {
      const thumbBtn = image.querySelector("button.img__gallery__thumb");
      const closeBtn = image.querySelector("button.img__gallery__close");
      const nextBtn = image.querySelector("button.img__gallery__next");
      const prevBtn = image.querySelector("button.img__gallery__prev");

      thumbBtn.addEventListener("click", () => image.classList.add("active"));
      closeBtn.addEventListener("click", () => image.classList.remove("active"));
      nextBtn.addEventListener("click", () => nextImage(images, index));
      prevBtn.addEventListener("click", () => prevImage(images, index));
    });
  });
}

const nextImage = (images, currentIndex) => {
  let index = currentIndex;
  images[currentIndex].classList.remove("active");
  if (index < images.length - 1) {
    index++;
  } else if (index == images.length - 1) {
    index = 0;
  }
  images[index].classList.add("active");
};

const prevImage = (images, currentIndex) => {
  let index = currentIndex;
  images[currentIndex].classList.remove("active");
  if (index === 0) {
    index = images.length - 1;
  } else if (index > 0) {
    index--;
  }
  images[index].classList.add("active");
};

document.onkeydown = function (evt) {
  evt = evt || window.Event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }

  if (isEscape) {
    const activeItems = document.querySelectorAll(".active");
    if (activeItems) {
      activeItems.forEach((active) => {
        active.classList.remove("active");
      });
    }
  }
};
