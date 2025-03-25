(() => {
	// document.removeEventListener('keydown', onEscKeyPress);
	const modalFeedback = document.querySelector('.js-feedback');
	const openFeedbackBtn = document.querySelector('.js-open-feedback');
	const openFeedbackBtnMenu = document.querySelector('.js-open-feedback-menu');
	const closeFeedbackBtn = document.querySelector('.js-close-feedback');
	// const closeFeedbackBlurArea = document.querySelector('.js-close-blurarea');

	const toggleFeedback = () => {
		// document.removeEventListener('keydown', onEscKeyPress);
		const isMenuOpen =
			openFeedbackBtn.getAttribute('aria-expanded') === 'true' || false;
		openFeedbackBtn.setAttribute('aria-expanded', !isMenuOpen);
		modalFeedback.classList.toggle('is-hidden');
		// document.addEventListener('keydown', onEscKeyPress);

		const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	// function onEscKeyPress(event) {
	// 	const ESC_KEY_CODE = 'Escape';
	// 	const isEscKey = event.code === ESC_KEY_CODE;

	// 	if (isEscKey) {
	// 		toggleFeedback();
	// 	}

	// 	document.removeEventListener('keydown', onEscKeyPress);
	// }

	openFeedbackBtn.addEventListener('click', toggleFeedback);
	openFeedbackBtnMenu.addEventListener('click', toggleFeedback);
	closeFeedbackBtn.addEventListener('click', toggleFeedback);
	// closeFeedbackBlurArea.addEventListener('click', toggleFeedback);
})();
