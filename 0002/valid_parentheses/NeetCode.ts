const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // discovered "if ... in" by mistake
    // note the use of the in keyword here, can check if key is in object
    // in this case the character represented by `${c}`,
    // returns true of closeToOpen{} has a key called `${c}`
    if (c in closeToOpen) {
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
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
