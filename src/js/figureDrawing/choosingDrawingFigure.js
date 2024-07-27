import { playDrawingSound } from "../playDrawingSound"
import { count, incrementValue } from "../gameResult/setCountValue"
import { drawingCircle } from "./drawingCircle"
import { drawingCross } from "./drawingCross"

export const choosingDrawingFigure = (target) => {
	if (target.classList.contains('field__item') && (target.children).length === 0) {
		count % 2 === 0 ? drawingCircle(target) : drawingCross(target)
		playDrawingSound()
		incrementValue()
	}
}