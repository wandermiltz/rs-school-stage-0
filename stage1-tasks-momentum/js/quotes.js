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
