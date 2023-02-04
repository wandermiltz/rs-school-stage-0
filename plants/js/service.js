(() => {
	const serviceButtons = document.querySelectorAll('.service-btn');
	const serviceItems = document.querySelectorAll('.service-item');
	const activeButtons = []

	serviceButtons.forEach(btn => {

		btn.addEventListener('click', (event) => {

			let pressedBtn = event.target
			let indexOfPressedBtn = activeButtons.indexOf(pressedBtn)

			btn.classList.toggle('active')

			if (indexOfPressedBtn >= 0) {
				activeButtons.splice(indexOfPressedBtn, 1)
			} else {
				activeButtons.push(pressedBtn)
			}

			let nonActiveButtons = Array.from(serviceButtons).filter(serviceButton =>
				!activeButtons.includes(serviceButton)
			)

			nonActiveButtons.forEach(nonActiveButton => {
				if (activeButtons.length >= 2) {
					nonActiveButton.classList.add('disabled')
				} else {
					nonActiveButton.classList.remove('disabled')
				}
			})

			serviceItems.forEach(serviceItem => {

				let isButtonActive = !!activeButtons.find(activeButton =>
					activeButton.dataset.serviceType == serviceItem.dataset.serviceType
				)

				if (isButtonActive || activeButtons.length == 0) {
					serviceItem.classList.remove('blur');
				} else {
					serviceItem.classList.add('blur');
				}
			})
		})
	})

})();