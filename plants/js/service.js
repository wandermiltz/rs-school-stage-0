(() => {
	const serviceButtons = document.querySelectorAll('.service-btn');
	const serviceItems = document.querySelectorAll('.service-item');

	const serviceBlurHandler = (className, enabled) => {
		serviceItems.forEach(el => {
			el.classList.remove('blur');
			if (!el.classList.contains(className) && enabled) {
				el.classList.add('blur');
			}
		})
	}

	class serviceBlur {
		constructor(elem) {
			this._elem = elem;
			elem.onclick = this.onClick.bind(this);
		}

		onClick(event) {
			let action = event.target.dataset.action;
			if (action) {
				serviceButtons.forEach(el => {
					if (el !== event.target) {
						el.classList.remove('active')
					}
				});
				if (event.target.classList.contains('active')) {
					event.target.classList.remove('active')
					serviceBlurHandler(action, false)
				} else {
					event.target.classList.add('active')
					serviceBlurHandler(action, true)
				}
			}
		}
	}

	new serviceBlur(serviceButtonsContainer);

})();