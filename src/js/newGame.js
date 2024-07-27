import { controllingAbilityFieldClick } from "./field/controllingAbilityFieldClick"
import { resetFieldClasses } from "./field/resetFieldClasses"
import { setActivePlayerStyles } from "./setActivePlayerStyles"
import { setCountValue } from "./gameResult/setCountValue"
import { setResultTextVisibility } from "./gameResult/setResultTextVisibility"
import { setGameFinished } from "./gameResult/setGameFinished"

export const newGame = () => {
	setCountValue(0)
	resetFieldClasses()
	controllingAbilityFieldClick('remove')
	setActivePlayerStyles('add', 'remove')
	setResultTextVisibility('remove')
	setGameFinished(false)
}