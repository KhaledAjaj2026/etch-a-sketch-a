const canvasGrids = document.getElementsByClassName('canvas-size');

const showGrid = (gridToShow) => {
	document.querySelectorAll('.canvas-size').forEach((element) => {
		element.classList.add('hidden');
	});
	document.getElementsByClassName(gridToShow)[0].classList.remove('hidden');
};

const clearBoard = () => {
	document.querySelectorAll('.item_8-8').forEach((element) => {
		element.setAttribute('style', 'background-color: beige;');
	});
	document.querySelectorAll('.item_16-16').forEach((element) => {
		element.setAttribute('style', 'background-color: beige;');
	});
	document.querySelectorAll('.item_32-32').forEach((element) => {
		element.setAttribute('style', 'background-color: beige;');
	});
	document.querySelectorAll('.item_64-64').forEach((element) => {
		element.setAttribute('style', 'background-color: beige;');
	});
};
