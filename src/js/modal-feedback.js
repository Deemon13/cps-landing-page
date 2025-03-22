(() => {
	const modalFeedback = document.querySelector('.js-feedback');
	const openFeedbackBtn = document.querySelector('.js-open-feedback');
	const openFeedbackBtnMenu = document.querySelector('.js-open-feedback-menu');
	const closeFeedbackBtn = document.querySelector('.js-close-feedback');
	// const blurArea = document.querySelector('.js-blur-area');

	const toggleMenu = () => {
		const isMenuOpen =
			openFeedbackBtn.getAttribute('aria-expanded') === 'true' || false;
		openFeedbackBtn.setAttribute('aria-expanded', !isMenuOpen);
		modalFeedback.classList.toggle('is-hidden');
		// blurArea.classList.toggle('is-open');

		const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openFeedbackBtn.addEventListener('click', toggleMenu);
	openFeedbackBtnMenu.addEventListener('click', toggleMenu);
	closeFeedbackBtn.addEventListener('click', toggleMenu);
	// blurArea.addEventListener('click', toggleMenu);
})();
