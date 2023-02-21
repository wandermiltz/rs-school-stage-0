import { getCurrentLang, addLangChangedListener } from './translation.js'

const cityElement = document.querySelector('.city')
const weatherIcon = document.querySelector('.weather-icon')
const temperatureElement = document.querySelector('.temperature')
const weatherDescriptionElement = document.querySelector('.weather-description')
const windSpeedElement = document.querySelector('.wind')
const humidityElement = document.querySelector('.humidity')
const weatherErrorElement = document.querySelector('.weather-error')

const emptyCityError = 'Please, enter a city'
const invalidCityError = 'Please enter a valid city'
const serviceError = 'Error, please try later'

const windSpeedTranslation = {
	'en': 'Wind Speed',
	'ru': 'Скорость ветра'
}

const humidityTranslation = {
	'en': 'Humidity',
	'ru': 'Влажность'
}

const defaultCityTranslation = {
	'en': 'Minsk',
	'ru': 'Минск'
}

const placeholderCityTranslation = {
	'en': 'Enter city',
	'ru': 'Введите город'
}

function showCityPlaceholder() {
	const lang = getCurrentLang()
	cityElement.placeholder = `[${placeholderCityTranslation[lang]}]`
}

function switchDefaultCityLang() {
	if ((cityElement.value == 'Minsk')) {
		cityElement.value = defaultCityTranslation['ru']
	} else if ((cityElement.value == 'Минск')) {
		cityElement.value = defaultCityTranslation['en']
	}
}

function getWeatherEmpty() {
	temperatureElement.textContent = ``
	windSpeedElement.textContent = ``
	humidityElement.textContent = ``
	weatherDescriptionElement.textContent = ``
	weatherIcon.classList.add('hidden')
	localStorage.clear()
}

function setLocalStorage() {
	if (weatherErrorElement.textContent == '') {
		localStorage.setItem('city', cityElement.value)
	}
}

function getLocalStorage() {
	if (localStorage.getItem('city')) {
		cityElement.value = localStorage.getItem('city')
	} else {
		const lang = getCurrentLang()
		cityElement.value = defaultCityTranslation[lang]
	}
}
export async function showWeather() {

	const lang = getCurrentLang()
	weatherErrorElement.textContent = ''

	if (!cityElement.value) {
		getWeatherEmpty()
		weatherErrorElement.textContent = emptyCityError
		return
	}

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityElement.value}&lang=${lang}&appid=3b3646771ed1200686eaeeb6c7cffeda&units=metric`
	const res = await fetch(url)
	const data = await res.json()

	if (data.cod == '404') {
		getWeatherEmpty()
		weatherErrorElement.textContent = invalidCityError
		return
	}

	if (!data || data.cod != '200') {
		getWeatherEmpty()
		weatherErrorElement.textContent = serviceError
		return
	}

	const temperature = Math.round(data.main.temp)
	const windSpeed = Math.round(data.wind.speed)
	const humidity = data.main.humidity

	const windSpeedName = windSpeedTranslation[lang]
	const humidityName = humidityTranslation[lang]

	temperatureElement.textContent = `${temperature}°C`
	windSpeedElement.textContent = `${windSpeedName}: ${windSpeed} m/s`
	humidityElement.textContent = `${humidityName}: ${humidity} %`
	weatherDescriptionElement.textContent = data.weather[0].description

	weatherIcon.className = 'weather-icon owf'
	weatherIcon.classList.add(`owf-${data.weather[0].id}`)
}

getLocalStorage()
showWeather()

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
cityElement.addEventListener('change', showWeather)

addLangChangedListener(showWeather)
addLangChangedListener(showCityPlaceholder)
addLangChangedListener(switchDefaultCityLang)