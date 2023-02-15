const nameElement = document.querySelector('.name')

function setLocalStorage() {
	localStorage.setItem('name', nameElement.value);
}

function getLocalStorage() {
	if (localStorage.getItem('name')) {
		nameElement.value = localStorage.getItem('name')
	}
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
