export function padLeft(padding: number | string, input: string) {
	if (typeof padding === "number") {
		return " ".repeat(padding) + input;
	}

	return padding + input;
}

export function padRight(padding: number | string, input: string) {
	if (typeof padding === "number") {
		return input + " ".repeat(padding);
	}

	return input + padding;
}
