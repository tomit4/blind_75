const longestPalindrome = (s) => {
    let result = "";
    let resLen = 0;
    for (let i = 0; i < s.length; i++) {
        // odd length
        let l = i;
        let r = s.length % 2 !== 0 ? i : i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > resLen) {
                result = s.slice(l, r + 1);
                resLen = r - l + 1;
            }
            l -= 1;
            r += 1;
        }
    }
    return result;
};
let s = "babad";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bab"
s = "cbbd";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bb"
