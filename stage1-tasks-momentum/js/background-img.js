import { getTimeOfDay } from './date-time.js'

const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

function getRandomNum(max, min) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}

let randomNum = getRandomNum(1, 20)

function setBg() {
	let timeOfDay = getTimeOfDay().toLowerCase()
	let bgNum = randomNum.toString().padStart(2, '0')

	body.style.backgroundImage = `url('https://raw.githubusercontent.com/wandermiltz/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
}

setBg()

function getSlideNext() {

	if (randomNum < 20) {
		randomNum += 1
	} else {
		randomNum = 1
	}
	setBg()
}

function getSlidePrev() {

	if (randomNum > 1) {
		randomNum -= 1
	} else {
		randomNum = 20
	}
	setBg()
}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)
