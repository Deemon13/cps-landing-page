(() => {
	// document.removeEventListener('keydown', onEscKeyPress);
	const modalCallback = document.querySelector('.js-callback');
	const openCallbackBtn = document.querySelector('.js-open-callback');
	const openCallbackBtnMenu = document.querySelector('.js-open-callback-menu');
	const closeCallbackBtn = document.querySelector('.js-close-callback');

	const toggleCallback = () => {
		// document.removeEventListener('keydown', onEscKeyPress);
		const isMenuOpen =
			openCallbackBtn.getAttribute('aria-expanded') === 'true' || false;
		openCallbackBtn.setAttribute('aria-expanded', !isMenuOpen);
		modalCallback.classList.toggle('is-hidden');
		// document.addEventListener('keydown', onEscKeyPress);

		const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	// function onEscKeyPress(event) {
	// 	const ESC_KEY_CODE = 'Escape';
	// 	const isEscKey = event.code === ESC_KEY_CODE;

	// 	if (isEscKey) {
	// 		toggleCallback();
	// 	}

	// 	document.removeEventListener('keydown', onEscKeyPress);
	// }

	openCallbackBtn.addEventListener('click', toggleCallback);
	openCallbackBtnMenu.addEventListener('click', toggleCallback);
	closeCallbackBtn.addEventListener('click', toggleCallback);
})();
