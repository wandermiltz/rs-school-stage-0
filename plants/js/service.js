(() => {
	const serviceButtons = document.querySelectorAll('.service-btn');
	const serviceItems = document.querySelectorAll('.service-item');

	const serviceBlurHandler = (className) => {
		serviceItems.forEach(el => {
			el.classList.remove('blur');

			if (!el.classList.contains(className)) {
				el.classList.add('blur');
			}
		})
	}

	class serviceBlur {
		constructor(elem) {
			this._elem = elem;
			elem.onclick = this.onClick.bind(this);
		}

		gardens() {
			serviceBlurHandler('gardens')
		}

		lawn() {
			serviceBlurHandler('lawn')
		}

		planting() {
			serviceBlurHandler('planting')
		}

		onClick(event) {
			let action = event.target.dataset.action;
			if (action) {
				serviceButtons.forEach(el => {
					el.classList.remove('active')
				});
				event.target.classList.add('active')
				this[action]();
			}
		}
	}

	new serviceBlur(serviceButtonsContainer);

})();