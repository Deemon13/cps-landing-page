const refs = {
	openCallbackBtn: document.querySelector('[callback-modal-open]'),
	openCallbackTabletBtn: document.querySelector('[callback-tablet-modal-open]'),
	closeCallbackBtn: document.querySelector('[callback-modal-close]'),
	modalCallback: document.querySelector('[callback-modal]'),
};

refs.openCallbackBtn.addEventListener('click', openCallbackModal);
refs.openCallbackTabletBtn.addEventListener('click', openCallbackModal);

function openCallbackModal(event) {
	event.preventDefault();
	toggleModal();
	document.addEventListener('keydown', onEscKeyPress);
	refs.closeCallbackBtn.addEventListener('click', onCallbackModalClose);
	refs.modalCallback.addEventListener('click', onBackdropClick);
}

function toggleModal() {
	refs.modalCallback.classList.toggle('is-hidden');
}

function onCallbackModalClose() {
	toggleModal();
	refs.closeCallbackBtn.removeEventListener('click', onCallbackModalClose);
	document.removeEventListener('keydown', onEscKeyPress);
}

function onBackdropClick(event) {
	if (event.currentTarget === event.target) {
		toggleModal();
		document.removeEventListener('keydown', onEscKeyPress);
		refs.modalCallback.removeEventListener('click', onBackdropClick);
	}
}

function onEscKeyPress(event) {
	const ESC_KEY_CODE = 'Escape';
	const isEscKey = event.code === ESC_KEY_CODE;

	if (isEscKey) {
		document.removeEventListener('keydown', onEscKeyPress);
		toggleModal();
		refs.closeCallbackBtn.removeEventListener('click', onCallbackModalClose);
		refs.modalCallback.removeEventListener('click', onBackdropClick);
	}
}
