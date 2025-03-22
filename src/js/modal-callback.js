(() => {
	const modalCallback = document.querySelector('.js-callback');
	const openCallbackBtn = document.querySelector('.js-open-callback');
	const openCallbackBtnMenu = document.querySelector('.js-open-callback-menu');
	const closeCallbackBtn = document.querySelector('.js-close-callback');
	// const blurArea = document.querySelector('.js-blur-area');

	const toggleMenu = () => {
		const isMenuOpen =
			openCallbackBtn.getAttribute('aria-expanded') === 'true' || false;
		openCallbackBtn.setAttribute('aria-expanded', !isMenuOpen);
		modalCallback.classList.toggle('is-hidden');
		// blurArea.classList.toggle('is-open');

		const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openCallbackBtn.addEventListener('click', toggleMenu);
	openCallbackBtnMenu.addEventListener('click', toggleMenu);
	closeCallbackBtn.addEventListener('click', toggleMenu);
	// blurArea.addEventListener('click', toggleMenu);
})();
