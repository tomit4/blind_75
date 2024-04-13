// FAIL, Unable to Solve 04/12/2024
const lengthOfLongestSubstring = (s: string): number => {
  let max = 0;
  let subStr = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    console.log("char :=>", c);
    if (subStr.indexOf(c) !== -1) {
      console.log("subStr before slice :=>", subStr);
      subStr = subStr.slice(subStr.indexOf(c));
      console.log("subStr after slice :=>", subStr);
    } else {
      subStr = subStr + c;
      console.log("subStr after new char :=>", subStr);
      max = Math.max(subStr.length, max);
    }
  }
  return max;
};

let s = "abcabcbb";
console.log("lengthOfLongestSubstring(s) :=>", lengthOfLongestSubstring(s));
// Output: 3

s = "bbbbb";
console.log("lengthOfLongestSubstring(s) :=>", lengthOfLongestSubstring(s));
// Output: 1

s = "pwwkew";
console.log("lengthOfLongestSubstring(s) :=>", lengthOfLongestSubstring(s));
// Output: 3

s = "aab";
console.log("lengthOfLongestSubstring(s) :=>", lengthOfLongestSubstring(s));
// Output: 2

s = "dvdf";
console.log("lengthOfLongestSubstring(s) :=>", lengthOfLongestSubstring(s));
// Output: 3

s = "aabaab!bb";
console.log("lengthOfLongestSubstring(s) :=>", lengthOfLongestSubstring(s));
// Output: 3
