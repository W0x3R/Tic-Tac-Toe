import { circleDrawing } from './js/figureDrawing/circleDrawing';
import { crossDrawing } from './js/figureDrawing/crossDrawing';
import { playDrawingSound } from './js/playDrawingSound';
import { setActivePlayerStyles } from './js/setActivePlayerStyles';
import { count, setCountValue, incrementValue } from './js/setCountValue';
import { setResultText } from './js/setResultText';
import { setResultTextVisibility } from './js/setResultTextVisibility';
import './style.scss';

const field = document.querySelector('.field');
const fieldItems = document.querySelectorAll('.field__item')
const naughtsScoreElem = document.querySelector('.res__score-naughts')
const crossesScoreElem = document.querySelector('.res__score-crosses')
let naughtsScore = 0;
let crossesScore = 0;
const newGameButton = document.querySelector('.newgame__button')

function zero(target) {
	if (target.classList.contains('field__item') && count % 2 === 0 && (target.children).length === 0) {
		target.classList.add('field__naught')
		circleDrawing(target)
		incrementValue()
		playDrawingSound()
		setActivePlayerStyles('remove', 'add')
	}
}

function cross(target) {
	if (target.classList.contains('field__item') && count % 2 !== 0 && (target.children).length === 0) {
		target.classList.add('field__cross')
		crossDrawing(target)
		incrementValue()
		playDrawingSound()
		setActivePlayerStyles('add', 'remove')
	}
}

function init(e) {
	cross(e.target)
	zero(e.target)
	showWin()
}

field.addEventListener('click', init)

function showWin() {
	let comboOfWin = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < comboOfWin.length; i++) {
		if (fieldItems[comboOfWin[i][0]].classList.contains('field__cross') && fieldItems[comboOfWin[i][1]].classList.contains('field__cross') && fieldItems[comboOfWin[i][2]].classList.contains('field__cross')) {
			setCountValue(0)
			field.removeEventListener('click', init)
			setActivePlayerStyles('remove', 'remove')
			setTimeout(() => {
				fieldItems[comboOfWin[i][0]].classList.add('field__cross_win')
				fieldItems[comboOfWin[i][1]].classList.add('field__cross_win')
				fieldItems[comboOfWin[i][2]].classList.add('field__cross_win')
				crossesScoreElem.textContent = ++crossesScore
				setResultText('xWin')
			}, 250)
		}
		else if (fieldItems[comboOfWin[i][0]].classList.contains('field__naught') && fieldItems[comboOfWin[i][1]].classList.contains('field__naught') && fieldItems[comboOfWin[i][2]].classList.contains('field__naught')) {
			setCountValue(0)
			field.removeEventListener('click', init)
			setActivePlayerStyles('remove', 'remove')
			setTimeout(() => {
				fieldItems[comboOfWin[i][0]].classList.add('field__naught_win')
				fieldItems[comboOfWin[i][1]].classList.add('field__naught_win')
				fieldItems[comboOfWin[i][2]].classList.add('field__naught_win')
				setResultText('oWin')
				naughtsScoreElem.textContent = ++naughtsScore
			}, 250)
		}
		else if (count === 9) {
			field.removeEventListener('click', init)
			setActivePlayerStyles('remove', 'remove')
			setTimeout(() => {
				setResultText('draw')
			}, 250)
		}
	}
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