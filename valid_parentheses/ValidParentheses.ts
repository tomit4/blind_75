// unsolved 03/23/2024

/*
const isValid = (s: string): boolean => {
  const openings: string[] = [];
  const closings: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      openings.push(s[i]);
    } else closings.push(s[i]);
  }
  console.log("openings :=>", openings);
  console.log("closings :=>", closings);
  /*
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && openings[0] === "(") {
      openings.shift();
    }
    if (s[i] === "}" && openings[0] === "{") {
      openings.shift();
    }
    if (s[i] === "]" && openings[0] === "[") {
      openings.shift();
    }
  }
  // console.log("openings :=>", openings);
  // return openings.length === 0;
  return false;
};
*/
const isValid = (s: string): boolean => {
  let i = 0;
  let j = 1;
  while (i < s.length) {
    i++;
  }
};
console.log('isValid("()") :=>', isValid("()")); // expects true
console.log('isValid("()[]{}") :=>', isValid("()[]{}")); // expects true
console.log('isValid("(]") :=>', isValid("(]")); // expects false
console.log('isValid("([{}])") :=>', isValid("([{}])")); // expects true
