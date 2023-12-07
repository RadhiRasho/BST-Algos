function padLeft(padding: number | string, input: string) {
	if (typeof padding === "number") {
		return " ".repeat(padding) + input;
	}

	return padding + input;
}

function padRight(padding: string, input: string) {
	return `${input} ${padding}`;
}

console.log(padLeft(25, "Hello World"));
console.log(padRight("Hello there", "Hello World"));
