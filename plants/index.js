
(function () {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.header-nav-list')

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger-active')
		nav.classList.toggle('header-nav-list-active')
	})
}())