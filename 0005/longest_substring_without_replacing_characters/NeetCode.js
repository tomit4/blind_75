const lengthOfLongestSubstring = (s) => {
    const charSet = new Set();
    let l = 0;
    let result = 0;
    for (let r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l += 1;
        }
        charSet.add(s[r]);
        result = Math.max(result, r - l + 1);
    }
    return result;
};
let s = "abcabcbb";
console.log("lengthOfLongestSubString(s) :=>", lengthOfLongestSubstring(s));
// Output: 3
s = "bbbbb";
console.log("lengthOfLongestSubString(s) :=>", lengthOfLongestSubstring(s));
// Output: 1
s = "pwwkew";
console.log("lengthOfLongestSubString(s) :=>", lengthOfLongestSubstring(s));
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
