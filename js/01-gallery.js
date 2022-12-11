import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc + `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`, '');

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClick);

function onClick(e) {
    blockStandartAction(e);

    if (e.target.nodeName !== "IMG") {
        return;
    }
console.log(e.target);
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">`)
    instance.show();
    
    gallery.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
}

function blockStandartAction(e) {
    e.preventDefault();
}





