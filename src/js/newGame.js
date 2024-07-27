import { controllingAbilityFieldClick } from "./controllingAbilityFieldClick"
import { resetFieldClasses } from "./resetFieldClasses"
import { setActivePlayerStyles } from "./setActivePlayerStyles"
import { setCountValue } from "./setCountValue"
import { setResultTextVisibility } from "./setResultTextVisibility"

export const newGame = () => {
	setCountValue(0)
	resetFieldClasses()
	controllingAbilityFieldClick('remove')
	setActivePlayerStyles('add', 'remove')
	setResultTextVisibility('remove')
}