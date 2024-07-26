import { fieldItems } from "..";

export const controllingAbilityFieldClick = (value) => {
	fieldItems.forEach(e => {
		e.classList[value]('field__naught_disabled')
	});
}