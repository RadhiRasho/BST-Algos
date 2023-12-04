import { HashMap } from "@/types";

function uniqueString(s: string) {
	if (s.length > 128) return false;

	const char_set = new HashMap<string, boolean>(128);

	for (let i = 0; i < s.length; i++) {
		const val = s.charAt(i);
		if (char_set.get(val)) {
			return false;
		}
		char_set.set(val, true);
	}

	return true;
}

console.time("uniqueString");
console.timeLog("uniqueString", uniqueString("abcde"));
console.timeLog("uniqueString", uniqueString("abcdea"));
console.timeLog("uniqueString", uniqueString("abcdeaa"));
console.timeLog("uniqueString", uniqueString("abcdeaaa"));
console.timeLog("uniqueString", uniqueString("abcdeaaaa"));
console.timeLog("uniqueString", uniqueString("abcdeaaaaa"));
console.timeEnd("uniqueString");
