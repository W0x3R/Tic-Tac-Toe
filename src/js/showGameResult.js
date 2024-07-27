import { checkGameDraw } from "./checkGameDraw"
import { checkWinner } from "./checkWinner"

const naughtsScoreElem = document.querySelector('.res__score-naughts')
const crossesScoreElem = document.querySelector('.res__score-crosses')
let naughtsScore = 0;
let crossesScore = 0;

export const showGameResult = () => {
	checkWinner('field__cross', crossesScoreElem, crossesScore, 'xWin')
	checkWinner('field__naught', naughtsScoreElem, naughtsScore, 'oWin')
	checkGameDraw()
}