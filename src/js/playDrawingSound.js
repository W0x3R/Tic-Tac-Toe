import drawingSound from '../sounds/drawingSound.mp3';

export const playDrawingSound = () => {
	const audio = new Audio(drawingSound)
	audio.play()
}