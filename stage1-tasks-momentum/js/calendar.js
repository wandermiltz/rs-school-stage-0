const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')

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

function showCalendar() {
	showTime()
	showDate()
	setTimeout(showCalendar, 1000)
}

showCalendar()
