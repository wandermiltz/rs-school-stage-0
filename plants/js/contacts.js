(() => {
	const cityHeader = document.querySelector('.city-header')
	const cityTitle = document.querySelector('.city-title')
	const cityContent = document.querySelector('.city-content')
	const cityExpand = document.querySelector('.city-expand')
	const cityDetails = document.querySelector('.city-details')
	const citySelectArr = document.querySelectorAll('.city-select');
	const cityAddressArr = document.querySelectorAll('.city-address')
	const cityContainer = document.querySelector('.city-container')

	cityHeader.addEventListener('click', () => {

		cityAddressArr.forEach(address => address.style.maxHeight = '')

		cityTitle.textContent = 'City'

		if (cityContent.style.maxHeight) {
			cityContent.style.maxHeight = ''
			cityExpand.classList.remove('active')
			cityHeader.classList.remove('active')
			cityContainer.classList.remove('active')
		} else {
			cityContent.style.maxHeight = `${cityContent.scrollHeight}px`
			cityExpand.classList.add('active')
			cityHeader.classList.add('active')
			cityContainer.classList.add('active')
			document.querySelector('.contact-image').hidden = false;
		}

		if (cityContent.style.maxHeight && document.documentElement.clientWidth < 768) {
			document.querySelector('.contact-image').hidden = true;
		} else {
			document.querySelector('.contact-image').hidden = false;
		}
	});

	citySelectArr.forEach(citySelect => {

		citySelect.addEventListener('click', (event) => {

			event.stopPropagation()

			const chosenCity = event.target.dataset.city
			const cityAddress = cityDetails.querySelector(`[data-city="${chosenCity}"]`)

			cityAddressArr.forEach(cityAddress => cityAddress.style.maxHeight = '')

			cityTitle.textContent = event.target.textContent
			cityAddress.style.maxHeight = `${cityAddress.scrollHeight}px`
			cityContent.style.maxHeight = ''
			cityExpand.classList.remove('active')
		});
	})
})();
