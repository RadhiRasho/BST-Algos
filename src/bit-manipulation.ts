const a = 5;
const b = 0;

let result;

result = a & b;
console.log("(a & b) =>", result);

result = a | b;
console.log("(a | b) =>", result);

result = a ^ b;
console.log("(a ^ b) =>", result);

result = ~a;
console.log("(~a) =>", result);

result = ~b;
console.log("(~b) =>", result);

result = a >> b;
console.log("(a >> b) =>", result);

result = a >>> b;
console.log("(a >>> b) =>", result);

result = a << b;
console.log("(a << b) =>", result);

const bug = 101;
const slug = 0;
const tug = 101;

if (bug ^ slug) {
	console.log(bug, slug, bug ^ slug);
}

if (bug ^ tug) {
	console.log(bug, tug, bug ^ tug);
} else {
	console.log("Else", bug, tug, bug ^ tug);
}

if (bug | tug) {
	console.log(bug, tug, bug | tug);
}

if (bug | slug) {
	console.log(bug, slug, bug | slug);
}

if (slug | bug) {
	console.log(slug, bug, slug | bug);
}

if (slug | slug) {
	console.log(slug, slug | slug);
} else {
	console.log("Else", slug, slug | slug);
}