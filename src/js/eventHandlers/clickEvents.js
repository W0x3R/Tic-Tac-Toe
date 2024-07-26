import { newGame, showWin } from "../.."
import { choosingDrawingFigure } from "../figureDrawing/choosingDrawingFigure"

export const clickEvents = {
	'.field': (e) => {
		choosingDrawingFigure(e.target)
		showWin()
	},
	'.newgame__button': newGame
}