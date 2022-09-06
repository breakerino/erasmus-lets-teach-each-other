import Splide from '@splidejs/splide';

export const initializeGalleries = (options = {}) => {
	const galleries = document.querySelectorAll('[data-gallery]');

	galleries.forEach(gallery => {
		const galleryID = gallery.getAttribute('data-gallery');
		console.log(`Initializing gallery "${galleryID}"...`);
		initializeGallery(galleryID, options);
	})
}

export const initializeGallery = (id, options) => {
	const sliders = {
		main: new Splide(`[data-gallery=${id}] .splide.slider__main`, {
			type: 'fade',
			rewind: true,
			pagination: false,
			arrows: false,
			autoHeight: true
		}),
		thumbnails: new Splide(`[data-gallery=${id}] .splide.slider__thumbnails`, {
			fixedWidth: 100,
			fixedHeight: 60,
			gap: 10,
			rewind: true,
			pagination: false,
			arrows: false,
			isNavigation: true,
		})
	}

	sliders.main.sync(sliders.thumbnails);
	sliders.main.mount();
	sliders.thumbnails.mount();
}
