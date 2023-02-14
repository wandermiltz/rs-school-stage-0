const greetingElement = document.querySelector('.greeting')
const nameElement = document.querySelector('.name')

function getTimeOfDay() {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay = ''

	if (hours > 18) {
		timeOfDay = 'Evening'
	}
	if (hours > 12) {
		timeOfDay = 'Afternoon'
	}
	if (hours > 6) {
		timeOfDay = 'Morning'
	}
	if (hours > 0) {
		timeOfDay = 'Night'
	}
	return timeOfDay
}

function showGreeting() {
	const timeOfDay = getTimeOfDay()
	const greetingText = `Good ${timeOfDay}`

	greetingElement.textContent = greetingText
}

showGreeting()

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
