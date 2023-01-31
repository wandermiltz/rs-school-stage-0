(() => {
	const serviceButtons = document.querySelectorAll('.service-btn');
	const serviceItems = document.querySelectorAll('.service-item');
	const gardensServiceButton = serviceButtons[0]
	const lawnServiceButton = serviceButtons[1]
	const plantingServiceButton = serviceButtons[2]

	const serviceBlurHandler = (className) => {

		serviceItems.forEach(el => {
			el.classList.remove('blur');

			if (!el.classList.contains(className)) {
				el.classList.add('blur');
			}
		})

	}
	gardensServiceButton.addEventListener('click', () => {
		serviceButtons.forEach(el => el.classList.remove('active'));
		gardensServiceButton.classList.add('active')
		serviceBlurHandler('gardens')
	})

	lawnServiceButton.addEventListener('click', () => {
		serviceButtons.forEach(el => el.classList.remove('active'));
		lawnServiceButton.classList.add('active')
		serviceBlurHandler('lawn')
	})

	plantingServiceButton.addEventListener('click', () => {
		serviceButtons.forEach(el => el.classList.remove('active'));
		plantingServiceButton.classList.add('active')
		serviceBlurHandler('planting')
	})

})();