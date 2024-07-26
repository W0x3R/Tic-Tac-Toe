import { checkGameDraw } from './js/checkGameDraw';
import { checkWinner } from './js/checkWinner';
import { choosingDrawingFigure } from './js/figureDrawing/choosingDrawingFigure';
import { setActivePlayerStyles } from './js/setActivePlayerStyles';
import { count, setCountValue } from './js/setCountValue';
import { setResultText } from './js/setResultText';
import { setResultTextVisibility } from './js/setResultTextVisibility';
import { winCombo } from './js/winCombo';
import './style.scss';

export const field = document.querySelector('.field');
export const fieldItems = document.querySelectorAll('.field__item')
const naughtsScoreElem = document.querySelector('.res__score-naughts')
const crossesScoreElem = document.querySelector('.res__score-crosses')
let naughtsScore = 0;
let crossesScore = 0;
const newGameButton = document.querySelector('.newgame__button')

export function init(e) {
	choosingDrawingFigure(e.target)
	showWin()
}

field.addEventListener('click', init)

function showWin() {
	checkWinner('field__cross', crossesScoreElem, crossesScore, 'xWin')
	checkWinner('field__naught', naughtsScoreElem, naughtsScore, 'oWin')
	checkGameDraw()
}

function newGame() {
	setCountValue(0)
	fieldItems.forEach(e => {
		e.textContent = ''
		e.classList.remove('field__naught', 'field__cross', 'field__naught_win', 'field__cross_win')
	})
	field.addEventListener('click', init)
	setActivePlayerStyles('add', 'remove')
	setResultTextVisibility('remove')
}

newGameButton.addEventListener('click', newGame)