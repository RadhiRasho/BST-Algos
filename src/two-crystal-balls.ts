export default function twoCrystalBalls(breaks: boolean[]): number {
	let i = 0;
	const jumpAmount = Math.floor(Math.sqrt(breaks.length));

	for (i = jumpAmount; i < breaks.length; i += jumpAmount) {
		if (breaks[i]) {
			break;
		}
	}

	i -= jumpAmount;

	for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
		if (breaks[i]) {
			return i;
		}
	}

	return -1;
}

console.time("twoCrystalBalls");
console.timeLog(
	"twoCrystalBalls",
	twoCrystalBalls([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		true,
	]),
);
console.timeEnd("twoCrystalBalls");
