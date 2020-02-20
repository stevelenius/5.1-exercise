// 5.1-exercise-timers.js
//
// Setting timesouts and intervals
// 

// set up some starting variables and constants
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 30;
const distance = 10;
// setup
function setup() {
	createCanvas(500, 500);
	background(0);
	blockColor = color('rgb(0, 128, 255)')
}

// draw first block
function drawBlock(x, y, color) {
	fill(color || 255);
	rect(x, y, 50, 50)
}

// keyboard handing to set color
function keyPressed() {
	let keyToNumber = Number(keyCode);
	if (isNaN(keyToNumber)){
		return;
	}
	blockColor = color('rgb(' + keyToNumber + ' , 64, 128)');
	return false;
}

// loop drawing blocks until canvas is filled
drawTimer = window.setInterval(() => {
	// if block hasn't yet moved to right end of canvas, draw another block
	if (blockX - 50 <= width) {
		drawBlock(blockX, blockY, blockColor);
		blockX += distance;
	// if block is at right end of canvas, start another row at left of canvas
	} else {
		blockX = 0;
		blockY += 50;
	}
	// if canvas is full, terminate function and show alert
	if (blockX - 50 > width && blockY + 50 === height) {
		window.clearInterval(drawTimer);
		alert('Refresh browser window to see this again. Press any key to change color.');
	}
// speed argument for setInterval (variable was set above)
}, speed);
