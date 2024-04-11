import { Circle, type Shape, ShapeClient, Square } from "@/types/Prototype";

const circle = new Circle("Red");

let client: ShapeClient = new ShapeClient(circle);

const redCircle: Shape = client.createShape();

redCircle.draw();

const square = new Square("Black");

client = new ShapeClient(square);

const blackSquare: Shape = client.createShape();

blackSquare.draw();
