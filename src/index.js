import { count, setCountValue, incrementValue } from './js/setCountValue';
import './style.scss';

const square = document.querySelector('.main__square');
const squareElements = document.querySelectorAll('.main__square-item')
const res = document.querySelector('.main__res')
const newGameButton = document.querySelector('.main__button')

function cross(target) {
	if (count % 2 === 0 && target.textContent === '') {
		target.textContent = 'o'
		target.classList.add('o')
		incrementValue()
	}
}

function zero(target) {
	if (count % 2 !== 0 && target.textContent === '') {
		target.textContent = 'x'
		target.classList.add('x')
		incrementValue()
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
		if (squareElements[comboOfWin[i][0]].classList.contains('x') && squareElements[comboOfWin[i][1]].classList.contains('x') && squareElements[comboOfWin[i][2]].classList.contains('x')) {
			setCountValue(0)
			square.removeEventListener('click', init)
			setTimeout(() => {
				squareElements[comboOfWin[i][0]].classList.add('main__square-item_win')
				squareElements[comboOfWin[i][1]].classList.add('main__square-item_win')
				squareElements[comboOfWin[i][2]].classList.add('main__square-item_win')
				res.textContent = 'X WIN'
			}, 250)
		}
		else if (squareElements[comboOfWin[i][0]].classList.contains('o') && squareElements[comboOfWin[i][1]].classList.contains('o') && squareElements[comboOfWin[i][2]].classList.contains('o')) {
			setCountValue(0)
			square.removeEventListener('click', init)
			setTimeout(() => {
				squareElements[comboOfWin[i][0]].classList.add('main__square-item_win')
				squareElements[comboOfWin[i][1]].classList.add('main__square-item_win')
				squareElements[comboOfWin[i][2]].classList.add('main__square-item_win')
				res.textContent = '0 WIN'
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
		e.classList.remove('x', 'o', 'main__square-item_win')
	})
	res.textContent = ''
	square.addEventListener('click', init)
}

newGameButton.addEventListener('click', newGame)