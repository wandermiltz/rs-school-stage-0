import { showGreeting, showDate, showPartOfDay } from './greeting.js'
import { getWeather } from './weather.js'


const langElement = document.getElementById('lang')

function changeLanguage() {

	let language = lang.checked ? 'ru' : 'en'

	showGreeting(language)
	showDate(language)
	showPartOfDay(language)
	getWeather(language)
}

changeLanguage()

langElement.addEventListener('click', changeLanguage)
