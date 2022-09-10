const dashPopup = document.querySelector('.dash-popup');
const process__item = document.querySelectorAll('.process__item');
const btnCloseDashPopup = document.querySelector('.btn-close-dash-poup');
const dashOverlay = document.querySelector('.dash-overlay');

process__item.forEach((e) => {
	e.addEventListener('click', () => {
		dashPopup.classList.add('show-dash-popup');
	});
});

btnCloseDashPopup.addEventListener('click', () => {
	dashPopup.classList.remove('show-dash-popup');
});
dashOverlay.addEventListener('click', () => {
	dashPopup.classList.remove('show-dash-popup');
});
