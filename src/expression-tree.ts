class MultiExpressionTree<T> {
	private func: (users: Users) => T;
	private users: Users;

	constructor(func: (users: Users) => T, users: Users) {
		this.func = func;
		this.users = users;
	}

	execute(): T {
		return this.func(this.users);
	}
}

class User {
	public firstName: string;
	public lastName: string;
	public age: number;

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
}

class Users {
	private users: User[];

	constructor(users: User[]) {
		this.users = users;
	}

	Select<T>(func: (user: User) => T) {
		return new MultiExpressionTree<T[]>((users) => {
			return users.users.map(func);
		}, this).execute();
	}

	Where(func: (user: User) => boolean) {
		return new MultiExpressionTree<Users>((users) => {
			const filtered = users.users.filter(func);
			return new Users(filtered);
		}, this).execute();
	}
}

const users = new Users([
	new User('Jeff', 'Doe', 25),
	new User('Jane', 'Doe', 30),
	new User('John', 'Smith', 40),
	new User('Jane', 'Smith', 50),
]);

let tree = users
	.Where((x) => x.firstName.toLowerCase() === 'jeff')
	.Select((x) => x);

console.log(tree); // Outputs: "John"
