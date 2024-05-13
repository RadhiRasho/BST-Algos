export async function retryAsync<T>(func: () => Promise<T>, threshold = 5) {
	try {
		return await func();
	} catch (err) {
		if (threshold > 0) {
			// console.log("Asynchronously Retrying...");
			return await retryAsync<T>(func, threshold - 1);
		}
		throw err;
	}
}

export function retry<T>(func: () => T, threshold = 5) {
	try {
		return func();
	} catch (err) {
		if (threshold > 0) {
			// console.log("Synchronously Retrying...");
			return retry<T>(func, threshold - 1);
		}
		throw err;
	}
}
