import { showDate, showTime, getTimeOfDay } from './date-time.js'

const nameElement = document.querySelector('.name')
const greetingElement = document.querySelector('.greeting')

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
