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
            data-source="${item.original}"
            alt="${item.original}"
          />
        </a>
      </li>`
    )
    .join("");
}
const makingGallery = createGallery(galleryItems);
galleryContainer.innerHTML = makingGallery;
galleryContainer.addEventListener("click", clickOnImage);

function clickOnImage (event) {
    event.preventDefault ();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}"
    </div>
`);
    
    instance.show();
}
