export class MultiExpressionTree<T> {
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

export class User {
	public firstName: string;
	public lastName: string;
	public age: number;

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
}

export class Users {
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
