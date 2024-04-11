export class Singleton {
	private static instance: Singleton;

	private constructor() {}

	public static async getInstance(): Promise<Singleton> {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}

	public DoSomething() {
		console.log("Doing something with the created instance");
		if (!Singleton.instance) {
			return "Failed";
		}

		return "Done";
	}
}
