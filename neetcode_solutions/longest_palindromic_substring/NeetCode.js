const longestPalindrome = (s) => {
    let res = "";
    let resLen = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = Math.floor(s.length / 2) % 2 === 0 ? i + 1 : i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > resLen) {
                res = s.slice(left, right + 1);
                resLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
    return res;
};
let s = "babad";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bab"
s = "cbbd";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bb"
