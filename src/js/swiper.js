import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
	if (!e.matches) return;
	const swiperServices = new Swiper('.swiper-services', {
		direction: 'horizontal',
		loop: true,
	});
});

window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
	if (!e.matches) return;
	const swiperBrands = new Swiper('.swiper-brands', {
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
	});
});

window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
	if (!e.matches) return;
	const swiperTechnics = new Swiper('.swiper-technics', {
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
	});
});

window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
	if (!e.matches) return;
	const swiperPrices = new Swiper('.swiper-prices', {
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
	});
});
