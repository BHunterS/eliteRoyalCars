"use strict";

let overflowHtml = document.querySelector('html');
let overflowBody = document.querySelector('body');
let menu = document.querySelector('.header');

menu.classList.add('_active');

let slideUp = document.querySelector('#slide-up');
let wrapper = document.querySelector('.wrapper');
let where = "start";

function Header() {
	let located = window.location.href;

	function findUrl(url) {
		let urlNormal = url.slice(7);
		let urlSplit = urlNormal.split('/').splice(0, 2);
		let urlSlice = urlSplit.splice(1, 1);

		return urlSlice;
	}
 	
	let currentUrl = findUrl(located);
	let headerLinks = document.querySelectorAll('#linkActive');
	let burgerLinks = document.querySelectorAll('#linkBurgerActive');

	headerLinks.forEach((item) => {
		let link = findUrl(item.href);
		console.log(currentUrl);
		console.log(link);
		if (currentUrl[0] == link[0]) {
			item.classList.add('active');
			headerLinks[0].classList.remove('active');
		} else if(currentUrl[0] == "") {
			headerLinks[0].classList.add('active');
		}
		
	});

	burgerLinks.forEach((item) => {
		let link = findUrl(item.href);

		if (currentUrl[0] == link[0]) {
			item.classList.add('active');
			burgerLinks[0].remove('active');
		} else if(currentUrl[0] == "") {
			burgerLinks[0].classList.add('active');
		}
	});
}

Header();

function slide(btn, to, where) {

	btn.addEventListener('click', (event) => {
		event.preventDefault();
		to.scrollIntoView({block: where, behavior: "smooth"});
	});
}

function burgerMenu(html, body) {
	let burger = document.querySelector('.burger');
	let burgerIco = document.querySelector('.burger-ico');

	burgerIco.addEventListener('click', () => {
		burger.classList.toggle('active');
		html.classList.toggle('overflow');
		body.classList.toggle('overflow');
	});
}

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

function slider(container, track, itemWidth, itemsCount, slidesToShow, btnBack, btnNext) {

	let position = 0;
	const movePosition = itemWidth;

	btnNext.addEventListener('click', () => {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

		position -= itemsLeft >= 1 ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	btnBack.addEventListener('click', () => {
		const itemsLeft = Math.abs(position) / itemWidth;

		position += itemsLeft >= 1 ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	const setPosition = () => {
		track.style.transform = `translateX(${position}px)`;
	};

	const checkBtns = () => {
		btnBack.disabled = position === 0;
		btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
	};

	checkBtns();
}

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0;index < animItems.length;index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}

ibg();
slide(slideUp, wrapper, where);
burgerMenu(overflowHtml, overflowBody);