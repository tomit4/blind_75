const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c in map === false) {
      stack.push(c);
    } else if (map[c] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

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
