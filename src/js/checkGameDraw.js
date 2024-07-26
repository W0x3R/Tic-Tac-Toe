import { field, init } from ".."
import { setActivePlayerStyles } from "./setActivePlayerStyles"
import { count } from "./setCountValue"
import { setResultText } from "./setResultText"

export const checkGameDraw = () => {
	if (count === 9) {
		field.removeEventListener('click', init)
		setActivePlayerStyles('remove', 'remove')
		setTimeout(() => {
			setResultText('draw')
		}, 250)
	}
}