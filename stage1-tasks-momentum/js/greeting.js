import { getCurrentLang, addLangChangedListener } from './translation.js'

const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const nameElement = document.querySelector('.name')
const greetingElement = document.querySelector('.greeting')

let partOfDay

const greetingTranslation = {
	'en': 'Good',
	'ru': 'Добрый'
}

export const partOfDayTranslation = {
	'en': ['morning', 'afternoon', 'evening', 'night'],
	'ru': ['утро', 'день', 'вечер', 'ночь']
}

const placeholderNameTranslation = {
	'en': 'Enter name',
	'ru': 'Введите имя'
}

function showTime() {
	const date = new Date()
	const currentTime = date.toLocaleTimeString()

	timeElement.textContent = currentTime
}

function getDate() {
	const date = new Date()
	return date
}

function showDate() {
	const lang = getCurrentLang()
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
	return partOfDay
}

function showPartOfDayGreeting() {
	const lang = getCurrentLang()
	const partOfDayTranslated = partOfDayTranslation[lang][partOfDay]
	greetingElement.textContent = `${greetingTranslation[lang]} ${partOfDayTranslated}`
}

function showDateTimeGreetingLive() {
	showTime()
	showDate()
	getPartOfDay()
	showPartOfDayGreeting()
	setTimeout(showDateTimeGreetingLive, 1000)
}

showDateTimeGreetingLive()

function setLocalStorage() {
	localStorage.setItem('name', nameElement.value)
}

function getLocalStorage() {
	if (localStorage.getItem('name')) {
		nameElement.value = localStorage.getItem('name')
	}
}

function showNamePlaceholder() {
	const lang = getCurrentLang()
	nameElement.placeholder = `[${placeholderNameTranslation[lang]}]`
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)

addLangChangedListener(showPartOfDayGreeting)
addLangChangedListener(showDate)
addLangChangedListener(showNamePlaceholder)