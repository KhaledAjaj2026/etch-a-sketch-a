const eightBy8 = document.querySelector('.grid_8-8');
const sixteenBy16 = document.querySelector('.grid_16-16');
const thirtyTwoBy32 = document.querySelector('.grid_32-32');
const sixtyFourBy64 = document.querySelector('.grid_64-64');
const oneTwentyEightBy128 = document.querySelector('.grid_128-128');

for (let i = 0; i < 64; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_8-8');
	eightBy8.appendChild(newItem);
}
for (let i = 0; i < 256; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_16-16');
	sixteenBy16.appendChild(newItem);
}
for (let i = 0; i < 1024; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_32-32');
	thirtyTwoBy32.appendChild(newItem);
}
for (let i = 0; i < 4096; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_64-64');
	sixtyFourBy64.appendChild(newItem);
}
for (let i = 0; i < 16384; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_128-128');
	oneTwentyEightBy128.appendChild(newItem);
}

// const gridOptions = document.getElementsByClassName('grid-size-option');
// const canvasGrids = document.getElementsByClassName('canvas-size');
// console.log(Array.from(gridOptions));
// Array.from(gridOptions).forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		btn.classList.toggle('hidden');
// 		console.log(btn);
// 	});
// });
