'use strict';

new Swiper('.swiper', {
	speed: 2200,
	parallax: true,
	spaceBetween: 15,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
});
