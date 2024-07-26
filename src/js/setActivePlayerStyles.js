const resCircle = document.querySelector('.res__circle')
const resCross = document.querySelector('.res__cross')

export const setActivePlayerStyles = (circleVal, crossVal) => {
	resCircle.classList[circleVal]('res__circle_active')
	resCross.classList[crossVal]('res__cross_active')
}