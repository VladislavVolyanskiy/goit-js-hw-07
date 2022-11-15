import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGalleryMarkup(items) {
	return items
		.map(
			item =>
				`<div class="gallery__item">
                <a class='gallery__link' href="${item.original}">
                    <img class='gallery__image'
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}">
                </a>
            </div>`,
		)
		.join('');
}

const galleryRef = document.querySelector('.gallery');

const addGalleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = addGalleryMarkup;

galleryRef.addEventListener('click', onImageClick);

let instance;

function onImageClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== 'IMG') {
		return;
	}

	instance = basicLightbox.create(
		`<img src=${event.target.dataset.source} width="1024" height="768">`,
	);
	instance.show();

	galleryRef.addEventListener('keydown', onModalClose);
}

function onModalClose(event) {
	if (event.code === 'Escape') {
		instance.close();
		galleryRef.removeEventListener('keydown', onModalClose);
	}
}
