import { resultText } from "./resultText";
import { setResultTextVisibility } from "./setResultTextVisibility";

export const resScoreText = document.querySelector('.res__score-text')

export const setResultText = (value) => {
	resScoreText.textContent = resultText[value];
	setResultTextVisibility('add')
}