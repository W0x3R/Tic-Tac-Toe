import { fieldItems } from "./resetFieldClasses"
import { controllingAbilityFieldClick } from "./controllingAbilityFieldClick"
import { setActivePlayerStyles } from "./setActivePlayerStyles"
import { setCountValue } from "./setCountValue"
import { setResultText } from "./setResultText"
import { winCombo } from "./winCombo"

let naughtsScore = 0;
let crossesScore = 0;

export const checkWinner = (classList, winElem, winText) => {
	for (let i = 0; i < winCombo.length; i++) {
		if (fieldItems[winCombo[i][0]].classList.contains(classList) && fieldItems[winCombo[i][1]].classList.contains(classList) && fieldItems[winCombo[i][2]].classList.contains(classList)) {
			setCountValue(0)
			controllingAbilityFieldClick('add')
			setActivePlayerStyles('remove', 'remove')
			setTimeout(() => {
				fieldItems[winCombo[i][0]].classList.add(`${classList}_win`)
				fieldItems[winCombo[i][1]].classList.add(`${classList}_win`)
				fieldItems[winCombo[i][2]].classList.add(`${classList}_win`)
				winElem.textContent = winText === 'xWin' ? ++crossesScore : ++naughtsScore
				setResultText(winText)
			}, 250)
		}
	}
}