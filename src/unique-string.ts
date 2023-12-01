import { HashMap } from "../types/HashMap";

function uniqueString(s: string) {
	if (s.length > 128) return false;

	const char_set = new HashMap<string, boolean>();

	for (let i = 0; i < s.length; i++) {
		const val: string = s.charAt(i);
		if (char_set.get(val)) {
			return false;
		}
		char_set.set(val, true);
	}

	return true;
}

console.time("uniqueString");
console.log("uniqueString", uniqueString("abcde"));
console.log("uniqueString", uniqueString("abcdea"));
console.log("uniqueString", uniqueString("abcdeaa"));
console.log("uniqueString", uniqueString("abcdeaaa"));
console.log("uniqueString", uniqueString("abcdeaaaa"));
console.log("uniqueString", uniqueString("abcdeaaaaa"));
console.timeEnd("uniqueString");
