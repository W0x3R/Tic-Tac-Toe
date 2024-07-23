import { circleDrawing } from './js/figureDrawing/circleDrawing';
import { crossDrawing } from './js/figureDrawing/crossDrawing';
import { playDrawingSound } from './js/playDrawingSound';
import { count, setCountValue, incrementValue } from './js/setCountValue';
import './style.scss';

const square = document.querySelector('.main__square');
const squareElements = document.querySelectorAll('.main__square-item')
const res = document.querySelector('.res')
const naughtsScoreElem = document.querySelector('.res__score-naughts')
const crossesScoreElem = document.querySelector('.res__score-crosses')
let naughtsScore = 0;
let crossesScore = 0;
const newGameButton = document.querySelector('.main__button')

function zero(target) {
	if (target.classList.contains('main__square-item') && count % 2 === 0 && (target.children).length === 0) {
		target.classList.add('main__square-naught')
		circleDrawing(target)
		incrementValue()
		playDrawingSound()
	}
}

function cross(target) {
	if (target.classList.contains('main__square-item') && count % 2 !== 0 && (target.children).length === 0) {
		target.classList.add('main__square-cross')
		crossDrawing(target)
		incrementValue()
		playDrawingSound()
	}
}

function init(e) {
	cross(e.target)
	zero(e.target)
	showWin()
}

square.addEventListener('click', init)

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
		if (squareElements[comboOfWin[i][0]].classList.contains('main__square-cross') && squareElements[comboOfWin[i][1]].classList.contains('main__square-cross') && squareElements[comboOfWin[i][2]].classList.contains('main__square-cross')) {
			setCountValue(0)
			square.removeEventListener('click', init)
			setTimeout(() => {
				squareElements[comboOfWin[i][0]].classList.add('main__square-cross_win')
				squareElements[comboOfWin[i][1]].classList.add('main__square-cross_win')
				squareElements[comboOfWin[i][2]].classList.add('main__square-cross_win')
				crossesScoreElem.textContent = ++crossesScore
			}, 250)
		}
		else if (squareElements[comboOfWin[i][0]].classList.contains('main__square-naught') && squareElements[comboOfWin[i][1]].classList.contains('main__square-naught') && squareElements[comboOfWin[i][2]].classList.contains('main__square-naught')) {
			setCountValue(0)
			square.removeEventListener('click', init)
			setTimeout(() => {
				squareElements[comboOfWin[i][0]].classList.add('main__square-naught_win')
				squareElements[comboOfWin[i][1]].classList.add('main__square-naught_win')
				squareElements[comboOfWin[i][2]].classList.add('main__square-naught_win')

				naughtsScoreElem.textContent = ++naughtsScore
			}, 250)
		}
		else if (count === 9) {
			square.removeEventListener('click', init)
			setTimeout(() => {
				res.textContent = 'GAME DRAW'
			}, 250)


		}
	}
}

function newGame() {
	setCountValue(0)
	squareElements.forEach(e => {
		e.textContent = ''
		e.classList.remove('main__square-naught', 'main__square-cross', 'main__square-naught_win', 'main__square-cross_win')
	})
	square.addEventListener('click', init)
}

newGameButton.addEventListener('click', newGame)