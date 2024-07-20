export const crossDrawing = (target) => {
	const svgNS = "http://www.w3.org/2000/svg";

	const svg = document.createElementNS(svgNS, "svg");
	svg.setAttribute("width", "90");
	svg.setAttribute("height", "90");
	svg.setAttribute("viewBox", "0 0 200 200");

	const line1 = document.createElementNS(svgNS, "line");
	line1.setAttribute("x1", "15");
	line1.setAttribute("y1", "15");
	line1.setAttribute("x2", "180");
	line1.setAttribute("y2", "180");
	line1.setAttribute("stroke", "black");
	line1.setAttribute("stroke-width", "5");
	line1.setAttribute("stroke-dasharray", "232.38");
	line1.setAttribute("stroke-dashoffset", "232.38");
	line1.classList.add("animated-cross");

	const line2 = document.createElementNS(svgNS, "line");
	line2.setAttribute("x1", "180");
	line2.setAttribute("y1", "15");
	line2.setAttribute("x2", "15");
	line2.setAttribute("y2", "180");
	line2.setAttribute("stroke", "black");
	line2.setAttribute("stroke-width", "5");
	line2.setAttribute("stroke-dasharray", "232.38");
	line2.setAttribute("stroke-dashoffset", "232.38");
	line2.classList.add("animated-cross");

	svg.appendChild(line1);
	svg.appendChild(line2);
	target.appendChild(svg);

	requestAnimationFrame(() => {
		line1.style.strokeDashoffset = '0';
		line2.style.strokeDashoffset = '0';
	});
}