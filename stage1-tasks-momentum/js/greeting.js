const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const nameElement = document.querySelector('.name')
const greetingElement = document.querySelector('.greeting')

let partOfDay

export const greetingTranslation = {
	'en': 'Good',
	'ru': 'Добрый'
}

export const partOfDayTranslation = {
	'en': ['morning', 'afternoon', 'evening', 'night'],
	'ru': ['утро', 'день', 'вечер', 'ночь']
}

export function showTime() {
	const date = new Date()
	const currentTime = date.toLocaleTimeString()

	timeElement.textContent = currentTime
}

export function getDate() {
	const date = new Date()
	return date
}

export function showDate(lang = 'en') {
	const date = getDate()
	const options = { weekday: 'long', month: 'long', day: 'numeric' }
	const currentDate = date.toLocaleDateString(lang, options)

	dateElement.textContent = currentDate
}

export function getPartOfDay() {
	const date = new Date()
	const hours = date.getHours()

	if (hours >= 18) {
		partOfDay = 2
	} else if (hours >= 12) {
		partOfDay = 1
	} else if (hours >= 6) {
		partOfDay = 0
	} else if (hours >= 0) {
		partOfDay = 3
	}
	console.log(partOfDay)
	return partOfDay
}

export function showPartOfDayGreeting(lang = 'en') {
	const partOfDayTranslated = partOfDayTranslation[lang][partOfDay]
	greetingElement.textContent = `${greetingTranslation[lang]} ${partOfDayTranslated}`
}

export function showDateTimeLive() {
	showTime()
	getPartOfDay()
	setTimeout(showDateTimeLive, 1000)
}

showDateTimeLive()

function setLocalStorage() {
	localStorage.setItem('name', nameElement.value)
}

function getLocalStorage() {
	if (localStorage.getItem('name')) {
		nameElement.value = localStorage.getItem('name')
	}
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
