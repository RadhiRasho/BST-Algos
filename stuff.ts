interface Bird {
	commonName: string;
	scientificName: string;
	sing(): void;
}

// Maps country names -> national bird.
// Not all nations have official birds (looking at you, Canada!)
declare const nationalBirds: Map<string, Bird>;

function makeNationalBirdCall(country: string) {
	const bird = nationalBirds.get(country); // bird has a declared type of Bird | undefined
	if (bird) {
		bird.sing(); // bird has type Bird inside the if statement
	} else {
		// bird has type undefined here.
	}
}

function makeBirdCalls(countries: string[]) {
	// birds: Bird[]
	const birds = countries
		.map((country) => nationalBirds.get(country))
		.filter((bird) => bird !== undefined);

	for (const bird of birds) {
		bird.sing(); // ok!
	}
}
