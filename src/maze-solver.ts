import { Point } from '../types';

/**
 * Solves a maze represented as a 2D array of strings, finding a path from the start point to the end point.
 * @param maze The maze to solve, represented as a 2D array of strings.
 * @param wall The string representation of a wall in the maze.
 * @param start The starting point in the maze.
 * @param end The ending point in the maze.
 * @returns An array of points representing the path from the start point to the end point, or an empty array if no path was found.
 */
export default function solve(
	maze: string[],
	wall: string,
	start: Point,
	end: Point
): Point[] {
	// Initialize a 2D array of booleans to keep track of visited cells
	var seen: boolean[][] = [];
	// Initialize an array to store the path from start to end
	var path: Point[] = [];

	// Initialize the seen array with false values for all cells
	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[0].length).fill(false));
	}

	// Recursively walk the maze from the start point to the end point
	walk(maze, wall, start, end, seen, path);

	// Return the path from start to end, or an empty array if no path was found
	return path;
}

// Define the four possible directions to move in the maze
var dirs = [
	[-1, 0], // Up
	[1, 0], // Down
	[0, -1], // Left
	[0, 1], // Right
];

/**
 * Recursively walks the maze from the current point to the end point, updating the seen array and path array as it goes.
 * @param maze The maze to solve, represented as a 2D array of strings.
 * @param wall The string representation of a wall in the maze.
 * @param curr The current point in the maze.
 * @param end The ending point in the maze.
 * @param seen The 2D array of booleans representing visited cells in the maze.
 * @param path The array of points representing the path from start to end.
 * @returns True if a path was found from the current point to the end point, false otherwise.
 */
function walk(
	maze: string[],
	wall: string,
	curr: Point,
	end: Point,
	seen: boolean[][],
	path: Point[]
): boolean {
	// If the current point is out of bounds or is a wall, return false
	if (
		curr.x < 0 ||
		curr.x >= maze[0].length ||
		curr.y < 0 ||
		curr.y >= maze.length ||
		maze[curr.y][curr.x] == wall
	) {
		return false;
	}

	// If the current point is the end point, add it to the path and return true
	if (curr.x == end.x && curr.y == end.y) {
		path.push(end);
		return true;
	}

	// If the current point has already been visited, return false
	if (seen[curr.y][curr.x]) {
		return false;
	}

	// Mark the current point as visited and add it to the path
	seen[curr.y][curr.x] = true;
	path.push(curr);

	// Recursively walk the maze in each of the four possible directions
	for (let [x, y] of dirs) {
		if (
			walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
		) {
			// If a path was found from the current point to the end point, return true
			return true;
		}
	}

	// If no path was found from the current point to the end point, remove the current point from the path and return false
	path.pop();
	return false;
}

const maze = [
	'##########',
	'#        #',
	'# ###### #',
	'# #     ##',
	'# # ######',
	'# #      #',
	'# ###### #',
	'#        #',
	'##########',
];

const wall = '#';
const start = { x: 1, y: 1 };
const end = { x: 8, y: 7 };

console.log(solve(maze, wall, start, end));
