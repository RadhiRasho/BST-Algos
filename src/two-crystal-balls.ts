export default function two_crystal_balls(breaks: boolean[]): number {
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

console.log(
	two_crystal_balls([
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
	])
);
