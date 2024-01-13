const square = document.querySelector('.main__square');
const squareElements = document.querySelectorAll('.main__square-item')
const firstPlayerScore = document.querySelector('.table__first-score');
const secondPlayerScore = document.querySelector('.table__second-score')
const res = document.querySelector('.res')
const newGameButton = document.querySelector('.main__button')

let count = 0;

function activeFirstPlayer() {
	secondPlayerScore.classList.remove('table__score_active')
	firstPlayerScore.classList.add('table__score_active')
}
activeFirstPlayer()


function activeSecondPlayer() {
	firstPlayerScore.classList.remove('table__score_active')
	secondPlayerScore.classList.add('table__score_active')
}

function cross(target) {
	if (count % 2 === 0 && target.textContent === '') {
		target.textContent = '✕'
		target.classList.add('x')
		activeSecondPlayer()
		count++
	}
}

function zero(target) {
	if (count % 2 !== 0 && target.textContent === '') {
		target.textContent = '◯'
		target.classList.add('o')
		activeFirstPlayer()

		count++
	}
}

function init(e) {
	cross(e.target)
	zero(e.target)

	showWin()
}

square.addEventListener('click', init)

function showWin() {
	let combofWin = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < combofWin.length; i++) {
		if (squareElements[combofWin[i][0]].classList.contains('x') && squareElements[combofWin[i][1]].classList.contains('x') && squareElements[combofWin[i][2]].classList.contains('x')) {
			square.removeEventListener('click', init)
			setTimeout(() => {
				squareElements[combofWin[i][0]].classList.add('main__square-item_win')
				squareElements[combofWin[i][1]].classList.add('main__square-item_win')
				squareElements[combofWin[i][2]].classList.add('main__square-item_win')
				res.textContent = 'X WINS'
			}, 250)
		}
		else if (squareElements[combofWin[i][0]].classList.contains('o') && squareElements[combofWin[i][1]].classList.contains('o') && squareElements[combofWin[i][2]].classList.contains('o')) {
			square.removeEventListener('click', init)
			setTimeout(() => {
				squareElements[combofWin[i][0]].classList.add('main__square-item_win')
				squareElements[combofWin[i][1]].classList.add('main__square-item_win')
				squareElements[combofWin[i][2]].classList.add('main__square-item_win')
				res.textContent = '0 WIN'
			}, 250)

		}
		else if (count === 9) {
			res.textContent = 'GAME DRAW'
			square.removeEventListener('click', init)
		}
	}
}

function newGame() {
	activeFirstPlayer()
	count = 0;
	squareElements.forEach(e => {
		e.textContent = ''
		e.classList.remove('x', 'o', 'main__square-item_win')
	})
	res.textContent = ''
	square.addEventListener('click', init)
}

newGameButton.addEventListener('click', newGame)