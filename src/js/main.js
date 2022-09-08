// cookies list
// const cookiesList = document.querySelectorAll('.cookies__list');
// const cookiesData = [
// 	{
// 		id: 1,
// 	},
// 	{
// 		id: 2,
// 	},
// 	{
// 		id: 3,
// 	},
// 	{
// 		id: 4,
// 	},
// 	{
// 		id: 5,
// 	},
// ];
// function myFunc() {
// 	const markup = `${cookiesData
// 		.map((item) => {
// 			return `
// <div class="cookies__item">
// 									<input type="checkbox" class="input">
// 									<figure class="cookies__img mb-1 center">
// 										<img src="img/product-3.png" alt=${item.id}>
// 									</figure>
// 									<div class="cookies__name center font-roboto">1 TBSP</div>
// 									<div class="cookies__title center font-roboto">Yukon Gold Potatoes</div>
// 									<div class="cookies__desc center font-roboto">Peel &amp; Cut in Quarters</div>
// 								</div>
// `;
// 		})
// 		.join('')}
// `;
// 	cookiesList.forEach((e) => {
// 		e.innerHTML = '';
// 	});
// 	cookiesList.forEach((e) => {
// 		e.insertAdjacentHTML('afterbegin', markup);
// 	});
// }
// myFunc();

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
