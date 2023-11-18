const canvasGrids = document.getElementsByClassName('canvas-size');

const showGrid = (gridToShow) => {
	document.querySelectorAll('.canvas-size').forEach((element) => {
		element.classList.add('hidden');
	});
	document.getElementsByClassName(gridToShow)[0].classList.remove('hidden');
};
