import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGalleryMarkup(items) {
	return items
		.map(
			item =>
				`<li class="gallery__item">
					<a class="gallery__link" href="${item.original}">
						<img 
						class="gallery__image"
						src="${item.preview}"
						alt="${item.description}"
						title="${item.description}">
					</a>
				</li>`,
		)
		.join('');
}

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
	// captionData: 'alt',
	captionDelay: 250,
});
