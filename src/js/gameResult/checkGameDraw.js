import { controllingAbilityFieldClick } from "../field/controllingAbilityFieldClick"
import { setActivePlayerStyles } from "../setActivePlayerStyles"
import { count } from "./setCountValue"
import { setResultText } from "./text/setResultText"

export const checkGameDraw = () => {
	if (count === 9) {
		controllingAbilityFieldClick('add')
		setActivePlayerStyles('remove', 'remove')
		setTimeout(() => {
			setResultText('draw')
		}, 250)
	}
}