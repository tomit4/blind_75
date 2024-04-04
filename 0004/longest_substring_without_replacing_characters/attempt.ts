const lengthOfLongestSubstring = (s: string): number => {
  const charSet = new Set();
  let left = 0;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    if (charSet.has(char)) {
      charSet.delete(char);
      left++;
    }
    charSet.add(char);
    result = Math.max(result, right - left + 1);
  }
  return result;
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

s = "dvdf"; // getting 2
console.log("lengthOfLongestSubstring(s) :=>", lengthOfLongestSubstring(s));
// Output: 3
