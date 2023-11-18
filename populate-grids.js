const eightBy8 = document.querySelector('.grid_8-8');
const sixteenBy16 = document.querySelector('.grid_16-16');
const thirtyTwoBy32 = document.querySelector('.grid_32-32');
const sixtyFourBy64 = document.querySelector('.grid_64-64');

for (let i = 0; i < 64; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_8-8');
	newItem.addEventListener('mouseover', () => {
		newItem.setAttribute('style', 'background-color: #000;');
	});
	eightBy8.appendChild(newItem);
}
for (let i = 0; i < 256; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_16-16');
	newItem.addEventListener('mouseover', () => {
		newItem.setAttribute('style', 'background-color: #000;');
	});
	sixteenBy16.appendChild(newItem);
}
for (let i = 0; i < 1024; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_32-32');
	newItem.addEventListener('mouseover', () => {
		newItem.setAttribute('style', 'background-color: #000;');
	});
	thirtyTwoBy32.appendChild(newItem);
}
for (let i = 0; i < 4096; i++) {
	const newItem = document.createElement('div');
	newItem.setAttribute('id', `item-${i + 1}`);
	newItem.setAttribute('class', 'item_64-64');
	newItem.addEventListener('mouseover', () => {
		newItem.setAttribute('style', 'background-color: #000;');
	});
	sixtyFourBy64.appendChild(newItem);
}
