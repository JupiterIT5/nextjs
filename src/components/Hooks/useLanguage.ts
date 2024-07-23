export const setCurrentLanguage = (lang: string) => {
	try {
		localStorage.setItem('Language', lang)
		location.reload()
	} catch (e) {
		console.log()
	}
}

export const language = () => {
	try {
		var lang = localStorage.getItem('Language')
		return lang
	} catch (e) {
		console.log()
	}
}
