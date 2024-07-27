import { checkGameDraw } from "./checkGameDraw"
import { checkWinner } from "./checkWinner"

const naughtsScoreElem = document.querySelector('.res__score-naughts')
const crossesScoreElem = document.querySelector('.res__score-crosses')

export const showGameResult = () => {
	checkWinner('field__cross', crossesScoreElem, 'xWin')
	checkWinner('field__naught', naughtsScoreElem, 'oWin')
	checkGameDraw()
}