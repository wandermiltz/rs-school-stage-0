import { getRandomNum } from './utils.js'
import { getCurrentLang, addLangChangedListener } from './translation.js'

const quoteElement = document.querySelector('.quote')
const authorElement = document.querySelector('.author')
const changeQuoteBtn = document.querySelector('.change-quote')

async function getQuotes() {

	const lang = getCurrentLang()

	const quotes = `data-${lang}.json`
	const res = await fetch(quotes)
	const data = await res.json()

	let quoteNum = getRandomNum(0, data.length)

	if (quoteElement.textContent == `"${data[quoteNum].text}."`) {
		quoteNum += 1
	}
	quoteElement.textContent = `"${data[quoteNum].text}."`
	authorElement.textContent = data[quoteNum].author
}

getQuotes()

changeQuoteBtn.addEventListener('click', getQuotes)
addLangChangedListener(getQuotes)


console.log('* Балл: 120 \n* Часы и календарь +15\n* Приветствие +10\n* Смена фонового изображения +20\n* Виджет погоды +15\n* Виджет цитата дня +10\n* Аудиоплеер +15\n* Продвинутый аудиоплеер +20\n* Перевод приложения на два языка (en/ru) +15')
