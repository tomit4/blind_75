// probably uses a stack or queue solution (stack)
const isValid = (s) => {
    if (s.length <= 1)
        return false;
    const openingStack = [];
    const openings = ["(", "{", "["];
    const bracketMap = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    for (let i = 0; i < s.length; i++) {
        if (openings.includes(s[i])) {
            openingStack.push(s[i]);
        }
        else if (bracketMap[s[i]] !== openingStack.pop()) {
            return false;
        }
    }
    return openingStack.length === 0;
};
/*
let s = "()";
console.log("isValid(s) :=>", isValid(s));
// Output: true

s = "()[]{}";
console.log("isValid(s) :=>", isValid(s));
// Output: true

s = "([{}])";
console.log("isValid(s) :=>", isValid(s));
// Output: true, outputs false with our current solution

s = "(]";
console.log("isValid(s) :=>", isValid(s));
// Output: false
*/
let s = "((";
console.log("isValid(s) :=>", isValid(s));
// Output: false
