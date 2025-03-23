let readMoreLink = document.querySelector('.js-expand-more');
let showIcon = readMoreLink.querySelector('.expand__icon');
let showText = document.querySelectorAll('.js-text');

const handleClickOnReadLessLink = function () {
	readMoreLink.lastElementChild.textContent = 'Читать далее';
	readMoreLink.removeEventListener('click', handleClickOnReadLessLink);
	readMoreLink.addEventListener('click', handleClickOnReadMoreLink);
	showIcon.classList.remove('expand__icon--pressed');
	showText.forEach(el => {
		el.classList.remove('is-show');
	});
};

const handleClickOnReadMoreLink = function () {
	readMoreLink.lastElementChild.textContent = 'Скрыть';
	readMoreLink.removeEventListener('click', handleClickOnReadMoreLink);
	readMoreLink.addEventListener('click', handleClickOnReadLessLink);
	showIcon.classList.add('expand__icon--pressed');
	showText.forEach(el => {
		el.classList.add('is-show');
	});
};

readMoreLink.addEventListener('click', handleClickOnReadMoreLink);
