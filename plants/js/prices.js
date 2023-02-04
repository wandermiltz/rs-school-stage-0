(() => {
	const priceItems = document.querySelectorAll('.price-item');
	const priceContents = document.querySelectorAll('.price-content');
	const priceExpands = document.querySelectorAll('.price-expand');
	const orderButtons = document.querySelectorAll('.order-button');

	const accordionHandler = (el, i) => {
		if (priceContents[i].style.maxHeight && event.target != orderButtons[i]) {
			priceContents[i].style.maxHeight = '';
			priceExpands[i].classList.remove('active');
			el.classList.remove('active');
		} else {
			priceContents.forEach(el => el.style.maxHeight = '');
			priceExpands.forEach(el => el.classList.remove('active'));
			priceItems.forEach(el => el.classList.remove('active'));
			priceContents[i].style.maxHeight = `${priceContents[i].scrollHeight}px`;
			priceExpands[i].classList.add('active');
			el.classList.add('active');
		}
	}

	priceItems.forEach((el, i) => {
		el.addEventListener('click', () => {
			accordionHandler(el, i)
		});
	});
})();