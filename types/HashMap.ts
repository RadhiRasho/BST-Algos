export class HashMap<KeyType extends string, ValueType extends boolean> {
	private keys: KeyType[];
	private values: ValueType[];

	constructor(size = 0) {
		this.keys = new Array<KeyType>(size);
		this.values = new Array<ValueType>(size);
	}

	get(key: KeyType): ValueType | null {
		const index = this.keys.indexOf(key);
		if (index === -1) return null;
		return this.values[index];
	}

	set(key: KeyType, value: ValueType) {
		const index = this.keys.indexOf(key);
		if (index === -1) {
			this.keys.push(key);
			this.values.push(value);
		} else {
			this.values[index] = value;
		}
	}
}
