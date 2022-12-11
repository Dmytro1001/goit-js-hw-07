import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryIt = document.querySelector('.gallery');
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc + `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`, '');

galleryIt.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionPosition: "bottom", captionDelay: 250});
gallery.on('show.simplelightbox', function () {
});
