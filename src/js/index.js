const square = document.querySelector('.main__square');
const firstPlayerScore = document.querySelector('.table__first-score');
const secondPlayerScore = document.querySelector('.table__second-score')
let count = 0;

function activeFirstPlayer() {
	secondPlayerScore.classList.remove('table__score_active')
	firstPlayerScore.classList.add('table__score_active')
	count++
}

function activeSecondPlayer() {
	firstPlayerScore.classList.remove('table__score_active')
	secondPlayerScore.classList.add('table__score_active')
	count++
}

square.addEventListener('click', function (e) {
	if (count % 2 === 0 && e.target.textContent === '') {
		e.target.textContent = 'X'
		activeFirstPlayer()
	}
	else {
		e.target.textContent = 'O'
		activeSecondPlayer()
	}
})