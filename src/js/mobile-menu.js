(() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
	const blurArea = document.querySelector('.js-blur-area');

	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');
		blurArea.classList.toggle('is-open');

		const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
	blurArea.addEventListener('click', toggleMenu);
})();
