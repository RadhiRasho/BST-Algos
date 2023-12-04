const a = 4;
const b = 1;

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
