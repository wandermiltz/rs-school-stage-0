
(function () {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.header-nav-list')

	function toggleMenu() {
		burger.classList.toggle('active')
		nav.classList.toggle('active')
	}

	function removeMenu() {
		burger.classList.remove('active')
		nav.classList.remove('active')
	}


	document.addEventListener('click', el => {
		const withinBoundaries = el.composedPath().includes(burger);
		if (!withinBoundaries) {
			removeMenu()
		}
	})

	burger.addEventListener('click', () => {
		toggleMenu()
	})

}())