import { newGame } from "../newGame"
import { choosingDrawingFigure } from "../figureDrawing/choosingDrawingFigure"
import { showGameResult } from "../gameResult/showGameResult"
import { gameFinished } from "../gameResult/setGameFinished"

export const clickEvents = {
	'.field': (e) => {
		if (!gameFinished) {
			choosingDrawingFigure(e.target)
			showGameResult()
		}
	},
	'.newgame__button': newGame
}