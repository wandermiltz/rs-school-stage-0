(() => {
	document.querySelectorAll('.price-item').forEach(el => {
		el.addEventListener('click', () => {
			let content = el.lastElementChild;
			let expand = el.firstElementChild.lastElementChild;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				expand.classList.remove('active');
				el.classList.remove('active');
			} else {
				document.querySelectorAll('.price-content').forEach(el => el.style.maxHeight = null);
				document.querySelectorAll('.price-expand').forEach(el => el.classList.remove('active'));
				content.style.maxHeight = `${content.scrollHeight}px`;
				expand.classList.add('active');
				el.classList.add('active');
			}
		});
	});
	//TODO при нажатии на кнопку Order Accordion все еще остается открытым
})();