import { setActivePlayerStyles } from "../setActivePlayerStyles"
import { createCircle } from "./createCircle"

export const drawingCircle = (target) => {
	target.classList.add('field__naught')
	createCircle(target)
	setActivePlayerStyles('remove', 'add')
}