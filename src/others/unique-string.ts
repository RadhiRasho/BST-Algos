import { HashMap } from "@/types/HashMap";

export function UniqueString(s: string) {
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
