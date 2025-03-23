let readMoreLink = document.querySelector('.js-expand-more');
let moreBrandsLink = document.querySelector('.js-more-brands');
let moreTechnicsLink = document.querySelector('.js-more-technics');

let showTextIcon = readMoreLink.querySelector('.expand__icon');
let showBrandIcon = moreBrandsLink.querySelector('.expand__icon');
let showTechnicIcon = moreTechnicsLink.querySelector('.expand__icon');

let showText = document.querySelectorAll('.js-text');
let showBrand = document.querySelectorAll('.js-brand');
let showTechnic = document.querySelectorAll('.js-technic');

const handleClickOnReadLessLink = function (e) {
	e.preventDefault();
	readMoreLink.lastElementChild.textContent = 'Читать далее';
	readMoreLink.removeEventListener('click', handleClickOnReadLessLink);
	readMoreLink.addEventListener('click', handleClickOnReadMoreLink);
	showTextIcon.classList.remove('expand__icon--pressed');
	showText.forEach(el => {
		el.classList.remove('is-show');
	});
};

const handleClickOnBrandsLessLink = function (e) {
	e.preventDefault();
	moreBrandsLink.lastElementChild.textContent = 'Показать все';
	moreBrandsLink.removeEventListener('click', handleClickOnBrandsLessLink);
	moreBrandsLink.addEventListener('click', handleClickOnBrandsMoreLink);
	showBrandIcon.classList.remove('expand__icon--pressed');
	showBrand.forEach(el => {
		el.classList.remove('brands__item--show');
	});
};

const handleClickOnTechnicsLessLink = function (e) {
	e.preventDefault();
	moreTechnicsLink.lastElementChild.textContent = 'Показать все';
	moreTechnicsLink.removeEventListener('click', handleClickOnTechnicsLessLink);
	moreTechnicsLink.addEventListener('click', handleClickOnTechnicsMoreLink);
	showTechnicIcon.classList.remove('expand__icon--pressed');
	showTechnic.forEach(el => {
		el.classList.remove('technics__item--show');
	});
};

const handleClickOnReadMoreLink = function (e) {
	e.preventDefault();
	readMoreLink.lastElementChild.textContent = 'Скрыть';
	readMoreLink.removeEventListener('click', handleClickOnReadMoreLink);
	readMoreLink.addEventListener('click', handleClickOnReadLessLink);
	showTextIcon.classList.add('expand__icon--pressed');
	showText.forEach(el => {
		el.classList.add('is-show');
	});
};

const handleClickOnBrandsMoreLink = function (e) {
	e.preventDefault();
	moreBrandsLink.lastElementChild.textContent = 'Скрыть';
	moreBrandsLink.removeEventListener('click', handleClickOnBrandsMoreLink);
	moreBrandsLink.addEventListener('click', handleClickOnBrandsLessLink);
	showBrandIcon.classList.add('expand__icon--pressed');
	showBrand.forEach(el => {
		el.classList.add('brands__item--show');
	});
};

const handleClickOnTechnicsMoreLink = function (e) {
	e.preventDefault();
	moreTechnicsLink.lastElementChild.textContent = 'Скрыть';
	moreTechnicsLink.removeEventListener('click', handleClickOnTechnicsMoreLink);
	moreTechnicsLink.addEventListener('click', handleClickOnTechnicsLessLink);
	showTechnicIcon.classList.add('expand__icon--pressed');
	showTechnic.forEach(el => {
		el.classList.add('technics__item--show');
	});
};

readMoreLink.addEventListener('click', handleClickOnReadMoreLink);
moreBrandsLink.addEventListener('click', handleClickOnBrandsMoreLink);
moreTechnicsLink.addEventListener('click', handleClickOnTechnicsMoreLink);
