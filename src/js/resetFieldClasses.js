export const fieldItems = document.querySelectorAll('.field__item')
const fieldClasses = ['field__naught', 'field__cross', 'field__naught_win', 'field__cross_win']

export const resetFieldClasses = () => {
	fieldItems.forEach(e => {
		if (e.classList.length > 1) {
			e.textContent = ''
			fieldClasses.forEach(className => e.classList.remove(className))
		}
	})
}