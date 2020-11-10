function searchAnimItems(list) {
	if(list.length > 0) {
		for (let index = 0;index < list.length;index++) {
			let item = list[index];
			item.classList.add('_anim-items');
		}
	}
}

const links = document.querySelectorAll('.link__item');
searchAnimItems(links);


const blockText = document.querySelectorAll('.block-text');
searchAnimItems(blockText);


const titles = document.querySelectorAll('.title');
searchAnimItems(titles);


const subTitles = document.querySelectorAll('.subtitle');
searchAnimItems(subTitles);


const blockImg = document.querySelectorAll('.block-img');
searchAnimItems(blockImg);


const paragraphs = document.querySelectorAll('.paragraph');
searchAnimItems(paragraphs);

const paragraphTitle = document.querySelectorAll('.paragraph-title');
searchAnimItems(paragraphTitle);

const autopark = document.querySelectorAll('.autopark__item');
searchAnimItems(autopark);

const grey = document.querySelectorAll('.grey-block');
searchAnimItems(grey);