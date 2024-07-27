import { resScoreText } from "./text/setResultText";

export const setResultTextVisibility = (value) => resScoreText.classList[value]('res__score-text_show')