// NOTE: Fails, do not follow ( see below if curious)
const expandFromMiddle = (s, left, right) => {
    if (s === null || left > right)
        return 0;
    while (left >= 0 && right <= s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
};
const longestPalindrome = (s) => {
    if (s === null || s.length < 1)
        return "";
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromMiddle(s, i, i);
        let len2 = expandFromMiddle(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
};
let string = "babad";
console.log(`longestPalindrome(${string}) :=>`, longestPalindrome(string));
// Output: "bab"
// FAILS: gets "cbb"
string = "cbbd";
console.log(`longestPalindrome(${string}) :=>`, longestPalindrome(string));
// Output: "bb"
string = "xaabacxcabaaxcabaax";
console.log(`longestPalindrome(string) :=>`, longestPalindrome(string));
// Output: "xaabacxcabaax"
