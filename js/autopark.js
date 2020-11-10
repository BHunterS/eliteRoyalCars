function checkWidth(container) {
	let slidesToShow = 4;

	if(container.clientWidth <= 1600) {
		slidesToShow = 3;
	}

	if(container.clientWidth <= 1150) {
		slidesToShow = 2;
	}

	if(container.clientWidth <= 820) {
		slidesToShow = 1;
	}

	return slidesToShow;
}

const container0 = document.querySelector('.autopark__content');
let slidesToShow0 = checkWidth(container0);
const track0 = document.querySelector('.autopark__items');
const items0 = document.querySelectorAll('.autopark__item');
const itemsCount0 = items0.length;
const itemWidth0 = (container0.clientWidth) / slidesToShow0;
const btnBack0 = document.querySelector('#back');
const btnNext0 = document.querySelector('#next');

slider(container0, track0, itemWidth0, itemsCount0, slidesToShow0, btnBack0, btnNext0, items0);