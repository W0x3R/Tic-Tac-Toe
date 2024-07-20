export const circleDrawing = (target) => {
	const svgNS = "http://www.w3.org/2000/svg";

	const svg = document.createElementNS(svgNS, "svg");
	svg.setAttribute("width", "90");
	svg.setAttribute("height", "90");
	svg.setAttribute("viewBox", "0 0 200 200");

	const circle = document.createElementNS(svgNS, "circle");
	circle.setAttribute("cx", "100");
	circle.setAttribute("cy", "100");
	circle.setAttribute("r", "90");
	circle.setAttribute("stroke", "#a21126");
	circle.setAttribute("stroke-width", "10");
	circle.setAttribute("fill", "none");
	circle.setAttribute("stroke-dasharray", "565.48");
	circle.setAttribute("stroke-dashoffset", "565.48");
	circle.classList.add("animated-circle");

	svg.appendChild(circle);
	target.appendChild(svg);
	requestAnimationFrame(() => {
		circle.style.strokeDashoffset = '0';
	});
}