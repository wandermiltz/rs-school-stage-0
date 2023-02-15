import { getTimeOfDay } from './date-time.js'

const body = document.querySelector('body')

function getRandomNum(max, min) {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}

function setBg() {
	let timeOfDay = getTimeOfDay().toLowerCase()
	let bgNum = getRandomNum(1, 20).toString().padStart(2, '0')
	console.log(bgNum)

	body.style.backgroundImage = `url('https://raw.githubusercontent.com/wandermiltz/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
}

setBg()