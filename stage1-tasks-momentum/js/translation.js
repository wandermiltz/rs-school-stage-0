import { showDate, showPartOfDayGreeting } from './greeting.js'
import { showWeather } from './weather.js'

const langElement = document.getElementById('lang')

let language = 'en'

export function setLanguage() {

	language = lang.checked ? 'ru' : 'en'

	showDate(language)
	showPartOfDayGreeting(language)
	showWeather(language)
}

setLanguage()

langElement.addEventListener('click', setLanguage)
