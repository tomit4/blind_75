const isValid = (s: string): boolean => {};

let s = "()";
console.log("isValid(s) :=>", isValid(s));
// Output: true

s = "()[]{}";
console.log("isValid(s) :=>", isValid(s));
// Output: true

s = "([{}])";
console.log("isValid(s) :=>", isValid(s));
// Output: true

s = "(]";
console.log("isValid(s) :=>", isValid(s));
// Output: false

s = "[";
console.log("isValid(s) :=>", isValid(s));
// Output: false

s = "(){}}{";
console.log("isValid(s) :=>", isValid(s));
// Output: false

s = "]";
console.log("isValid(s) :=>", isValid(s));
// Output: false
