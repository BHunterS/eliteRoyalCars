const container = document.querySelector('.comment__inner');
const track = document.querySelector('.comment__items');
const items = document.querySelectorAll('.comment__item');
const itemsCount = items.length;
const btnBack = document.querySelector('#btn-back');
const btnNext = document.querySelector('#btn-next');
const slidesToShow = 1;
const itemWidth = (container.clientWidth) / slidesToShow;

function minWidth(items, itemWidth) {
	items.forEach((item) => {
		item.style.minWidth = `${itemWidth}px`;
	});
}

minWidth(items, itemWidth);

window.addEventListener('resize', () => {
	const items = document.querySelectorAll('.comment__item');
	const itemWidth = (container.clientWidth) / slidesToShow;
	minWidth(items, itemWidth);
});

slider(container, track, itemWidth, itemsCount, slidesToShow, btnBack, btnNext, items);