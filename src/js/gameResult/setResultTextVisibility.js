import { resScoreText } from "./setResultText";

export const setResultTextVisibility = (value) => resScoreText.classList[value]('res__score-text_show')