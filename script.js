function changeInfo(info) {
	setInfo = document.getElementById(info);
	selectedInfo = setInfo.id.slice(-1);
	setInfo.classList.add('show--info');

	if (selectedInfo == 1) {
		document.getElementById('show--info2').classList.remove('show--info');
		document.getElementById('show--info3').classList.remove('show--info');
	}
	if (selectedInfo == 2) {
		document.getElementById('show--info1').classList.remove('show--info');
		document.getElementById('show--info3').classList.remove('show--info');
	}
	if (selectedInfo == 3) {
		document.getElementById('show--info1').classList.remove('show--info');
		document.getElementById('show--info2').classList.remove('show--info');
	}
}

/**********PRODUTO**************/

function setQuantidade(input) {
	let valor = document.getElementById('input-quantidade').value;
	if (input === 'remove') {
		valor <= 0 ? (valor = 0) : valor--;
		document.getElementById('input-quantidade').value = valor;
	} else if (input === 'add') {
		valor++;
		document.getElementById('input-quantidade').value = valor;
	}
	total = document.getElementById('valorTotal').textContent;
	console.log(total);
}

function changeImage(thumbnail) {
	document.getElementById('display').src = thumbnail;
}

function clickedImage(id) {
	document.getElementById('img-mini-1').style.opacity = 1;
	document.getElementById('img-mini-2').style.opacity = 1;
	document.getElementById('img-mini-3').style.opacity = 1;

	document.getElementById(id).style.opacity = 0.5;
}

/* INDEX POPUP */
function closePopUp() {
	document.getElementById('container-pop-up').style.display = 'none';
	console.log('CLOSEPOPUP');
}

function checkAge() {
	const currentYear = new Date().getFullYear();
	const year = document.getElementById('year').value;
	const age = currentYear - year;
	age >= 18 ? closePopUp() : alert('Você não tem idade suficiente');
}

/**********RESPONSIVIDADE MENU E MENU-BAR**************/
const menu_bar = document.querySelector('.menu-bar');
const NavMenu = document.querySelector('.nav_menu');

menu_bar.addEventListener('click', () => {
	menu_bar.classList.toggle('ativo');
	NavMenu.classList.toggle('ativo');
});

/**********CARROSSEL HOME-LOJA**************/
const carrossel = document.querySelectorAll('.carrossel');

const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 10,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});

/***********MENU OVER HOME-LOJA*****************/

const menuOne = document.getElementById('menuOne');
const menuTwo = document.getElementById('menuTwo');
const menuThree = document.getElementById('menuThree');
const menuFour = document.getElementById('menuFour');
const menuFive = document.getElementById('menuFive');

const mouseOverMenu = () => {
	menuOne.style.textDecoration = 'underline';
};
const mouseOutMenu = () => {
	menuOne.style.textDecoration = 'none';
};

const mouseOverMenuTwo = () => {
	menuTwo.style.textDecoration = 'underline';
};
const mouseOutMenuTwo = () => {
	menuTwo.style.textDecoration = 'none';
};

const mouseOverMenuThree = () => {
	menuThree.style.textDecoration = 'underline';
};
const mouseOutMenuThree = () => {
	menuThree.style.textDecoration = 'none';
};

const mouseOverMenuFour = () => {
	menuFour.style.textDecoration = 'underline';
};
const mouseOutMenuFour = () => {
	menuFour.style.textDecoration = 'none';
};

const mouseOverMenuFive = () => {
	menuFive.style.textDecoration = 'underline';
};
const mouseOutMenuFive = () => {
	menuFive.style.textDecoration = 'none';
};

