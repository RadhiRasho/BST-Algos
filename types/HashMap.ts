export class HashMap<K, V> {
	private _keys: K[];
	private _values: V[];

	constructor(size = 0) {
		this._keys = new Array<K>(size);
		this._values = new Array<V>(size);
	}

	get(key: K): V | undefined {
		const index = this._keys.indexOf(key);
		if (index === -1) return undefined;
		return this._values[index];
	}

	set(key: K, value: V) {
		const index = this._keys.indexOf(key);
		if (index === -1) {
			this._keys.push(key);
			this._values.push(value);
		} else {
			this._values[index] = value;
		}
	}
}
