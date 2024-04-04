const isValid = (s) => {
    const stack = [];
    const closeToOpen = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c in closeToOpen) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
        else {
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
s = "([{}])";
console.log("isValid(s) :=>", isValid(s));
// Output: true
s = "(]";
console.log("isValid(s) :=>", isValid(s));
// Output: false
