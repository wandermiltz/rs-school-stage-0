(() => {
	const cityAccordion = document.querySelector('.city-accordion')
	const cityHeader = document.querySelector('.city-header')
	const cityContent = document.querySelector('.city-content')
	const cityExpand = document.querySelector('.city-expand')

	cityAccordion.addEventListener('click', () => {

		if (cityContent.style.maxHeight) {
			cityContent.style.maxHeight = ''
			cityExpand.classList.remove('active')
			cityHeader.classList.remove('active')
		} else {
			cityContent.style.maxHeight = `${cityContent.scrollHeight}px`
			cityExpand.classList.add('active')
			cityHeader.classList.add('active')
		}
	});
})();
