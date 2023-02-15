const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')


export function showDate() {
	const date = new Date()
	const options = { weekday: 'long', month: 'long', day: 'numeric' }
	const currentDate = date.toLocaleDateString('en', options)

	dateElement.textContent = currentDate
}

export function showTime() {
	const date = new Date()
	const currentTime = date.toLocaleTimeString()

	timeElement.textContent = currentTime
}

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
