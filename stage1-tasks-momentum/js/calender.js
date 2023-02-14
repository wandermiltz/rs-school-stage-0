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

function showCalender() {
	showTime()
	showDate()
	setTimeout(showCalender, 1000)
}

showCalender()
