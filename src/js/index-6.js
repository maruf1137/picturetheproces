// popup
const popup = document.querySelector('.popup');
const btnDeleteTools = document.querySelector('.btn-delete-tools');
const hidePopupBtn = document.querySelectorAll('.hide-popup');

btnDeleteTools.addEventListener('click', () => {
	popup.classList.add('show-popup');
});

hidePopupBtn.forEach((e) => {
	e.addEventListener('click', () => {
		popup.classList.remove('show-popup');
	});
});
