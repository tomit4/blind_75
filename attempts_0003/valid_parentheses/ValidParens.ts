const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in map) {
      stack.push(char);
    } else if (stack.length && stack[stack.length - 1] !== undefined) {
      if (s[i] !== map[stack.pop()]) {
        return false;
      }
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
