import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createGallery(items) {
    return items
    .map(
        (item) => `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>
      </li>`
    )
    .join("");
}
const makingGallery = createGallery(galleryItems);
galleryContainer.innerHTML = makingGallery;

const galleryLightbox = new SimpleLightbox (".gallery a", {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
}); 
