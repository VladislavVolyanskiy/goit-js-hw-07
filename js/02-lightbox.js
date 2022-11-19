import { galleryItems } from './gallery-items.js';

function createGalleryMarkup(items) {
	return items
		.map(
			item =>
				`<li class="gallery__item">
					<a class="gallery__link" href="${item.original}">
					<img 
					class="gallery__image"
					src="${item.preview}"
					alt="${item.description}">
				</a>
				</li>`,
		)
		.join('');
}

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
	captionPosition: 'bottom',
});
