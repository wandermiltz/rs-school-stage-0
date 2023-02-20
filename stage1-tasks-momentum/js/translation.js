import { showDate, showPartOfDayGreeting } from './greeting.js'
import { showWeather } from './weather.js'

const nameElement = document.querySelector('.name')
const cityElement = document.querySelector('.city')
const langElement = document.getElementById('language')

let lang = 'en'

const placeholderNameTranslation = {
	'en': 'Enter name',
	'ru': 'Введите имя'
}

const placeholderCityTranslation = {
	'en': 'Enter city',
	'ru': 'Введите город'
}


function showNamePlaceholder(lang = 'en') {
	nameElement.placeholder = `[${placeholderNameTranslation[lang]}]`
}

function showCityPlaceholder(lang = 'en') {
	cityElement.placeholder = `[${placeholderCityTranslation[lang]}]`
}


export function setLanguage() {

	lang = language.checked ? 'ru' : 'en'

	showDate(lang)
	showPartOfDayGreeting(lang)
	showWeather(lang)
	showNamePlaceholder(lang)
	showCityPlaceholder(lang)
}

setLanguage()

langElement.addEventListener('click', setLanguage)
