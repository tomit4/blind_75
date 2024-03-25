// COULD NOT SOLVE 03/25/2024
/* doesn't work because subStr can be in middle
const lengthOfLongestSubstring = (s: string): number => {
  let subStr = "";
  for (let i = 0; i < s.length; i++) {
    if (!subStr.includes(s[i])) {
      subStr = `${subStr}${s[i]}`;
    } else break;
  }
  return subStr.length;
};
*/
// we actually we're not that far off
const lengthOfLongestSubstring = (s) => {
    let i = 0;
    let subStr = "";
    let uniqCount = 0;
    while (i < s.length) {
        // console.log("subStr :=>", subStr);
        if (!subStr.includes(s[i])) {
            subStr = `${subStr}${s[i]}`;
            console.log("subStr :=>", subStr);
            uniqCount++;
        }
        else {
            subStr = `${subStr.substring(i + 1)}${s[i]}`;
            console.log("subStr :=>", subStr);
        }
        i++;
    }
    return uniqCount;
};
let string = "abcabcbb";
console.log("lengthOfLongestSubstring(string) :=>", lengthOfLongestSubstring(string));
// Output: 3
string = "bbbbb";
console.log("lengthOfLongestSubstring(string) :=>", lengthOfLongestSubstring(string));
// Output: 1
string = "pwwkew";
console.log("lengthOfLongestSubstring(string) :=>", lengthOfLongestSubstring(string));
// Output: 3
