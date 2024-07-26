import { setActivePlayerStyles } from "../setActivePlayerStyles"
import { createCross } from "./createCross"

export const drawingCross = (target) => {
	target.classList.add('field__cross')
	createCross(target)
	setActivePlayerStyles('add', 'remove')
}
