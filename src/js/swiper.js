import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
	if (!e.matches) return;
	const swiperServices = new Swiper('.swiper-services', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// },

		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});
});
