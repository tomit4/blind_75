const lengthOfLongestSubString = (s) => {
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
console.log("lengthOfLongestSubString(s) :=>", lengthOfLongestSubString(s));
// Output: 3
s = "bbbbb";
console.log("lengthOfLongestSubString(s) :=>", lengthOfLongestSubString(s));
// Output: 1
s = "pwwkew";
console.log("lengthOfLongestSubString(s) :=>", lengthOfLongestSubString(s));
// Output: 3
