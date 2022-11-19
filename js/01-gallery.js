import { galleryItems } from './gallery-items.js';

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

// documented options of basicLightbox used
// https://github.com/electerious/basicLightbox/blob/master/README.md

function onImageClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== 'IMG') {
		return;
	}

	instance = basicLightbox.create(
		`<div class=""><img src=${event.target.dataset.source} width="1024" height="768"></div>`,
		{
			className: 'modal',
			onShow: () => {
				window.addEventListener('keydown', onEscDown);
			},
			onClose: () => {
				window.removeEventListener('keydown', onEscDown);
			},
		},
	);
	instance.show();
}

function onEscDown(event) {
	if (event.code === 'Escape') {
		instance.close();
	}
}
