const langElement = document.getElementById('language')

const state = {
	lang: 'en',
	langChangeListeners: []
}

export const getCurrentLang = () => state.lang
export const addLangChangedListener = (listener) => state.langChangeListeners.push(listener)

export function setLanguage() {

	state.lang = language.checked ? 'ru' : 'en'
	console.log('lang changed', state.lang)

	state.langChangeListeners.forEach(func => {
		func()
	})
}

langElement.addEventListener('click', setLanguage)
