import './style.scss';
import { controllingAbilityFieldClick } from './js/controllingAbilityFieldClick';
import { callEvents } from './js/eventHandlers/callEvents';
import { clickEvents } from './js/eventHandlers/clickEvents';
import { setActivePlayerStyles } from './js/setActivePlayerStyles';
import { setCountValue } from './js/setCountValue';
import { setResultTextVisibility } from './js/setResultTextVisibility';
import { resetFieldClasses } from './js/resetFieldClasses';

window.addEventListener('click', (e) => callEvents(e, clickEvents))

export function newGame() {
	setCountValue(0)
	resetFieldClasses()
	controllingAbilityFieldClick('remove')
	setActivePlayerStyles('add', 'remove')
	setResultTextVisibility('remove')
}