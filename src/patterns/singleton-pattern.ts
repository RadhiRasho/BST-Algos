import { Singleton } from "@/types/Singleton";

async function clientCode() {
	const s1 = await Singleton.getInstance(); // Reminds me of Java, blehhhh
	const s2 = await Singleton.getInstance();

	if (s1 === s2) {
		console.log("Singleton works, both variables contain the same instance.");
	} else {
		console.log("Singleton failed, variables contain different instances.");
	}

	s1.DoSomething();
	s2.DoSomething();
}

clientCode();
