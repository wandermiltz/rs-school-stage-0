import { showDate, showTime, getTimeOfDay } from './date-time.js'

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
