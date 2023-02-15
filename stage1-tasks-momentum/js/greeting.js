import { showDate, showTime } from './date-time.js'

const greetingElement = document.querySelector('.greeting')

export function getTimeOfDay() {
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
