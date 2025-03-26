const refs = {
	openFeedbackBtn: document.querySelector('[feedback-modal-open]'),
	openFeedbackTabletBtn: document.querySelector('[feedback-tablet-modal-open]'),
	closeFeedbackBtn: document.querySelector('[feedback-modal-close]'),
	modalFeedback: document.querySelector('[feedback-modal]'),
};

refs.openFeedbackBtn.addEventListener('click', openFeedbackModal);
refs.openFeedbackTabletBtn.addEventListener('click', openFeedbackModal);

function openFeedbackModal(event) {
	event.preventDefault();
	toggleModal();
	document.addEventListener('keydown', onEscKeyPress);
	refs.closeFeedbackBtn.addEventListener('click', onFeedbackModalClose);
	refs.modalFeedback.addEventListener('click', onBackdropClick);
}

function toggleModal() {
	refs.modalFeedback.classList.toggle('is-hidden');
}

function onFeedbackModalClose() {
	toggleModal();
	refs.closeFeedbackBtn.removeEventListener('click', onFeedbackModalClose);
	document.removeEventListener('keydown', onEscKeyPress);
}

function onBackdropClick(event) {
	if (event.currentTarget === event.target) {
		toggleModal();
		document.removeEventListener('keydown', onEscKeyPress);
		refs.modalFeedback.removeEventListener('click', onBackdropClick);
	}
}

function onEscKeyPress(event) {
	const ESC_KEY_CODE = 'Escape';
	const isEscKey = event.code === ESC_KEY_CODE;

	if (isEscKey) {
		document.removeEventListener('keydown', onEscKeyPress);
		toggleModal();
		refs.closeFeedbackBtn.removeEventListener('click', onFeedbackModalClose);
		refs.modalFeedback.removeEventListener('click', onBackdropClick);
	}
}
