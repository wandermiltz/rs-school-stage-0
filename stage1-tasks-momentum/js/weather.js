
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

function getWeatherEmpty() {
	temperatureElement.textContent = ``
	windSpeedElement.textContent = ``
	humidityElement.textContent = ``
	weatherDescriptionElement.textContent = ``
	weatherIcon.classList.add('hidden')
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
		cityElement.value = `Minsk`
	}
}

async function getWeather(lang = 'en') {

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

	temperatureElement.textContent = `${temperature}°C`
	windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`
	humidityElement.textContent = `Humidity: ${humidity} %`
	weatherDescriptionElement.textContent = data.weather[0].description

	weatherIcon.className = 'weather-icon owf'
	weatherIcon.classList.add(`owf-${data.weather[0].id}`)
}

getLocalStorage()
getWeather()

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
cityElement.addEventListener('change', getWeather)