import type { NumberRange, Percent } from "@/types/CommonTypes";

const a: Percent = "0%"; // Min = '0%', Max = '100%'
//    ^?

// @ts-ignore Error on purpose.
const a2: Percent = "101%"; // Error due to out of range due to starting index of 0;
//    ^?

const b: NumberRange<101> = 0; // Min = 0, Max = 100;
//    ^?

//@ts-ignore Error on purpose.
const b2: NumberRange<101> = 101; // Error Due to out of range due to starting index of 0;
//    ^?
