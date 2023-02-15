const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const greetingElement = document.querySelector('.greeting')
const nameElement = document.querySelector('.name')

function showDate() {
	const date = new Date()
	const options = { weekday: 'long', month: 'long', day: 'numeric' }
	const currentDate = date.toLocaleDateString('en', options)

	dateElement.textContent = currentDate
}

function showTime() {
	const date = new Date()
	const currentTime = date.toLocaleTimeString()

	timeElement.textContent = currentTime
}

function getTimeOfDay() {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay = ''

	if (hours >= 18) {
		timeOfDay = 'Evening'
	} else if (hours >= 12) {
		timeOfDay = 'Afternoon'
	} else if (hours >= 6) {
		timeOfDay = 'Morning'
	} else if (hours >= 0) {
		timeOfDay = 'Night'
	}

	return timeOfDay
}

function showGreeting() {
	const timeOfDay = getTimeOfDay()
	const greetingText = `Good ${timeOfDay}`

	greetingElement.textContent = greetingText
}

function showTimeDateGreeting() {
	showTime()
	showDate()
	showGreeting()
	setTimeout(showTimeDateGreeting, 1000)
}

showTimeDateGreeting()

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
