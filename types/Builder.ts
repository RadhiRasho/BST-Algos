/** Product: Represents a computer with CPU, RAM, and storage configuration. */
export class Computer {
	private cpu!: string;
	private ram!: string;
	private storage!: string;

	setCpu(cpu: string) {
		this.cpu = cpu;
	}

	setRam(ram: string) {
		this.ram = ram;
	}

	setStorage(storage: string) {
		this.storage = storage;
	}

	displayInfo() {
		console.log(
			`Computer Configuration: \n  CPU: 		${this.cpu}\n  Ram: 		${this.ram}\n  Storage: 	${this.storage}`,
		);
	}
}

/** Builder Interface: Represents a builder interface for constructing a computer. */
interface Builder {
	BuildCPU(): void;
	BuildRam(): void;
	BuildStorage(): void;

	/**
	 * Gets the final constructed computer.
	 * @returns The constructed computer. */
	GetResults(): Computer;
}

/** Concrete Builder: Represents a builder for creating a gaming computer.  */
export class GamingComputerBuilder implements Builder {
	private computer = new Computer();

	BuildCPU(): void {
		this.computer.setCpu("Gaming CPU");
	}
	BuildRam(): void {
		this.computer.setRam("16GB DDR4");
	}
	BuildStorage(): void {
		this.computer.setStorage("1TB SSD");
	}
	GetResults(): Computer {
		return this.computer;
	}
}

/** Director: Represents a director that constructs a computer using a builder. */
export class ComputerDirector {
	constructor(builder: Builder) {
		builder.BuildCPU();
		builder.BuildRam();
		builder.BuildStorage();
	}
}
