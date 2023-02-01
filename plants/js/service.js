(() => {
	const serviceButtons = document.querySelectorAll('.service-btn');
	const serviceItems = document.querySelectorAll('.service-item');
	const activeButtons = []

	// Изначально без blur.
	// При нажатии кнопки сама кнопка меняет стиль, при этом карточки, относящиеся к кнопке,
	// должны быть без blur, а остальные - с blur.
	// При нажатии двух кнопок все карточки, относящиеся к этим двум кнопкам - без blur,
	// а относящиеся к третьей кнопке - с blur


	serviceButtons.forEach(btn => {

		btn.addEventListener('click', (event) => {

			let pressedBtn = event.target
			let indexOfPressedBtn = activeButtons.indexOf(pressedBtn)

			if (indexOfPressedBtn >= 0) {
				activeButtons.splice(indexOfPressedBtn, 1)
			} else {
				activeButtons.push(pressedBtn)
			}

			btn.classList.toggle('active')

			let notSelectedButtons = Array.from(serviceButtons).filter(el => !activeButtons.includes(el))

			notSelectedButtons.forEach(notSelectedBtn => {
				if (activeButtons.length >= 2) {
					notSelectedBtn.classList.add('disabled')
				} else {
					notSelectedBtn.classList.remove('disabled')
				}
			})

			serviceItems.forEach(el => {

				let serviceType = el.dataset.service
				let isButtonActive = !!activeButtons.find(btn => btn.dataset.service == serviceType)

				if (isButtonActive) {
					el.classList.remove('blur');
				} else {
					el.classList.add('blur');
				}
			})
		})
	})

	// Без логики двух активных кнопок:

	//const serviceButtonsContainer = document.querySelector('.service-btns-container');

	// const blurHandler = (className, enabled) => {
	// 	serviceItems.forEach(el => {
	// 		el.classList.remove('blur');
	// 		if (!el.classList.contains(className) && enabled) {
	// 			el.classList.add('blur');
	// 		}
	// 	})
	// }

	// serviceButtonsContainer.addEventListener('click', (event) => {

	// 	let action = event.target.dataset.service;
	// 	if (action) {
	// 		serviceButtons.forEach(el => {
	// 			if (el !== event.target) {
	// 				el.classList.remove('active')
	// 			}
	// 		});
	// 		if (event.target.classList.contains('active')) {
	// 			event.target.classList.remove('active')
	// 			blurHandler(action, false)
	// 		} else {
	// 			event.target.classList.add('active')
	// 			blurHandler(action, true)
	// 		}
	// 	}
	// })

})();