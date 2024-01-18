function success(result: any) {
	console.log(result);
}

function doSomething() {
	return new Promise((resolve) => {
		console.log("in the process of doing something...");
		setTimeout(() => {
			// Other things to do before completion of the promise
			console.log("Did something");
			// The fulfillment value of the promise
			resolve("https://example.com/");
		}, 10_000);
	});
}

doSomething().then(success);
