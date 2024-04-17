import { describe, expect, it } from "bun:test";
import { MultiExpressionTree, User, Users } from "@/types/ExpressionTree";

describe("MultiExpressionTree", () => {
	it("should execute the provided function", () => {
		const users = new Users([new User("John", "Doe", 30)]);
		const tree = new MultiExpressionTree(
			(users) => users.Select((user) => user.age),
			users,
		);
		expect(tree.execute()).toEqual([30]);
	});
});

describe("User", () => {
	it("should create a user with the provided first name, last name, and age", () => {
		const user = new User("John", "Doe", 30);
		expect(user.firstName).toBe("John");
		expect(user.lastName).toBe("Doe");
		expect(user.age).toBe(30);
	});
});

describe("Users", () => {
	it("should select properties from the users", () => {
		const users = new Users([
			new User("John", "Doe", 30),
			new User("Jane", "Doe", 25),
		]);
		expect(users.Select((user) => user.age)).toEqual([30, 25]);
	});

	it("should filter the users", () => {
		const users = new Users([
			new User("John", "Doe", 30),
			new User("Jane", "Doe", 25),
		]);
		const filtered = users.Where((user) => user.age > 25);
		expect(filtered.Select((user) => user.age)).toEqual([30]);
	});
});
