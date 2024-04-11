export interface Shape {
	clone(): Shape;
	draw(): void;
}

export class Circle implements Shape {
	private color: string;

	public constructor(color: string) {
		this.color = color;
	}

	clone(): Shape {
		return new Circle(this.color);
	}

	draw(): void {
		console.log(`Drawing a ${this.color} circle.`);
	}
}

export class Square implements Shape {
	private color: string;
	private height?: number;
	private width?: number;

	constructor(color: string, height = 10, width = 10) {
		this.color = color;
		this.height = height;
		this.width = width;
	}

	clone(): Shape {
		return new Square(this.color, this.height, this.width);
	}
	draw(): void {
		console.log(
			`Drawing a ${this.color} square that has a height of ${this.height}ft. and width of ${this.width}ft.`,
		);
	}
}

export class ShapeClient {
	private shapeProto: Shape;

	public constructor(shapeProto: Shape) {
		this.shapeProto = shapeProto;
	}

	createShape() {
		return this.shapeProto.clone();
	}
}
