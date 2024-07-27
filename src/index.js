import './style.scss';
import { controllingAbilityFieldClick } from './js/controllingAbilityFieldClick';
import { callEvents } from './js/eventHandlers/callEvents';
import { clickEvents } from './js/eventHandlers/clickEvents';
import { setActivePlayerStyles } from './js/setActivePlayerStyles';
import { setCountValue } from './js/setCountValue';
import { setResultTextVisibility } from './js/setResultTextVisibility';

export const fieldItems = document.querySelectorAll('.field__item')

window.addEventListener('click', (e) => callEvents(e, clickEvents))

export function newGame() {
	setCountValue(0)
	fieldItems.forEach(e => {
		e.textContent = ''
		e.classList.remove('field__naught', 'field__cross', 'field__naught_win', 'field__cross_win')
	})
	controllingAbilityFieldClick('remove')
	setActivePlayerStyles('add', 'remove')
	setResultTextVisibility('remove')
}