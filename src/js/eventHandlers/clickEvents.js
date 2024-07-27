import { newGame } from "../newGame"
import { choosingDrawingFigure } from "../figureDrawing/choosingDrawingFigure"
import { showGameResult } from "../showGameResult"

export const clickEvents = {
	'.field': (e) => {
		choosingDrawingFigure(e.target)
		showGameResult()
	},
	'.newgame__button': newGame
}