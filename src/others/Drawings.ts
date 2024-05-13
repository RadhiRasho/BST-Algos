import { padRight } from "@/utils/Padding";
import { sleep } from "bun";

const Colors = [
	"\u001b[31m", // Red
	"\u001b[32m", // Green
	"\u001b[33m", // Yellow
	"\u001b[34m", // Blue
	"\u001b[35m", // Magenta
	"\u001b[36m", // Cyan
];

const randomColor = (): string =>
	Colors[Math.floor(Math.random() * Colors.length)];

function drawLine(char: string, times: number) {
	let s = "";
	for (let i = 0; i < times; i++) {
		s += char;
	}

	for (let i = 0; i < 5; i++) {
		s += padRight(10, " ");
		for (let i = 0; i < times; i++) {
			s += char;
		}
	}

	return s;
}

function lineWithColor(i: number) {
	const line = drawLine(".", i);
	const color = randomColor();
	return `${color}${line}`;
}

async function draw() {
	while (true) {
		for (let i = 1; i < 25; i++) {
			console.log(lineWithColor(i));
			await sleep(25);
		}
		for (let i = 25; i > 1; i--) {
			console.log(lineWithColor(i));
			await sleep(25);
		}
	}
}

draw();
