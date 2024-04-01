// Solved 03/27/2024, got dinged for not checking against s.length <= 1
// AND got dinged for just returning true instead of checking
// if stack still had elements in it(not enough closing parens)
const isValid = (s: string): boolean => {
  const openings = ["(", "{", "["];
  if (s.length <= 1 || !openings.includes[s[0]]) return false;
  const openingStack: string[] = [];
  const bracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (openings.includes(s[i])) {
      openingStack.push(s[i]);
    } else if (bracketMap[s[i]] !== openingStack.pop()) {
      return false;
    }
  }
  return openingStack.length === 0;
};

let s = "()";
console.log("isValid(s) :=>", isValid(s));
// Output: true

s = "()[]{}";
console.log("isValid(s) :=>", isValid(s));
// Output: true

s = "(]";
console.log("isValid(s) :=>", isValid(s));
// Output: false

// my own custom test case
s = "([{}])";
console.log("isValid(s) :=>", isValid(s));
// Output: true, outputs false with our current solution

// got dinged for this one
s = "[";
console.log("isValid(s) :=>", isValid(s));
// Output: false

// got dinged for this one
s = "((";
console.log("isValid(s) :=>", isValid(s));
// Output: false
