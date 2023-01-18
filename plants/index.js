
(function () {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.header-nav-list')

	function toggleMenu() {
		burger.classList.toggle('burger-active')
		nav.classList.toggle('header-nav-list-active')
	}

	function removeMenu() {
		burger.classList.remove('burger-active')
		nav.classList.remove('header-nav-list-active')
	}


	document.addEventListener('click', (e) => {
		const withinBoundaries = e.composedPath().includes(burger);
		if (!withinBoundaries) {
			removeMenu()
		}
	})

	burger.addEventListener('click', () => {
		toggleMenu()
	})

}())

console.log('* 85/85 \n* Вёрстка соответствует макету. Ширина экрана 768px +24 \n* Вёрстка соответствует макету.Ширина экрана 380px + 24 \n* Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется + 15 \n* На ширине экрана 380рх и меньше реализовано адаптивное меню + 22 \n(Допускается появление адаптивного меню на ширине более 380, но не допускается на ширине более 770px)')
