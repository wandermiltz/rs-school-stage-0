(() => {
	const serviceButtonsContainer = document.querySelector('.service-btns-container');
	const serviceButtons = document.querySelectorAll('.service-btn');
	const serviceItems = document.querySelectorAll('.service-item');
	const serviceButtonGarden = document.querySelector('button[data-action="gardens"]');
	const serviceButtonLawn = document.querySelector('button[data-action="lawn"]');
	const serviceButtonPlanting = document.querySelector('button[data-action="planting"]');

	const activeButtons = []
	const allButtons = []
	let disabledButton = ''

	serviceButtons.forEach(btn => {

		allButtons.push(btn.dataset.action)

		btn.addEventListener('click', (event) => {

			if (activeButtons.includes(event.target.dataset.action)) {
				activeButtons.splice(activeButtons.indexOf(event.target.dataset.action), 1)
			} else {
				activeButtons.push(event.target.dataset.action)
			}

			if (event.target.dataset.action) {
				btn.classList.toggle('active')
			}

			if (activeButtons.length === 2) {

				disabledButton = allButtons.filter(el => !activeButtons.includes(el))
				document.querySelector(`button[data-action="${disabledButton}"]`).classList.add('disabled')

			} else if (disabledButton) {

				document.querySelector(`button[data-action="${disabledButton}"]`)?.classList.remove('disabled')
				disabledButton = ''

			}

		})
	})

	// const blurHandler = (className, enabled) => {
	// 	serviceItems.forEach(el => {
	// 		el.classList.remove('blur');
	// 		if (!el.classList.contains(className) && enabled) {
	// 			el.classList.add('blur');
	// 		}
	// 	})
	// }

	// serviceButtonsContainer.addEventListener('click', (event) => {

	// 	let action = event.target.dataset.action;
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