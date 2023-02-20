import { getPartOfDay, partOfDayTranslation } from './greeting.js'
import { getRandomNum } from './utils.js'

const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

let randomNum = getRandomNum(1, 20)
let lang = 'en'

function setBg() {
	const partOfDay = getPartOfDay()
	const partOfDayTranslated = partOfDayTranslation[lang][partOfDay]
	const bgNum = randomNum.toString().padStart(2, '0')
	const img = new Image()

	img.src = `https://raw.githubusercontent.com/wandermiltz/stage1-tasks/assets/images/${partOfDayTranslated}/${bgNum}.jpg`
	img.onload = () => {
		body.style.backgroundImage = `url(${img.src})`
	}
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
