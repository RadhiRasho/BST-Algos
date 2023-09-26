function maxProfit(prices: number[]): number {
	let max = 0;
	let min = Infinity;
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] - min > max) {
			max = prices[i] - min;
		}
		if (prices[i] < min) {
			min = prices[i];
		}
	}
	return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

console.log(maxProfit([7, 6, 4, 3, 1])); // 0
