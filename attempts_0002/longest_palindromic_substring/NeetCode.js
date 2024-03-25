const longestPalindrome = (s) => {
    let res = "";
    let resLen = 0;
    for (let i = 0; i < s.length; i++) {
        // odd length
        let l = i;
        // if odd num of chars, right pointer is i, else if even, right pointer is i + 1
        let r = s.length % 2 !== 0 ? i : i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > resLen) {
                res = s.substring(l, r + 1);
                resLen = r - l + 1;
            }
            l -= 1;
            r += 1;
        }
    }
    return res;
};
let string = "babad";
console.log(`longestPalindrome(${string}) :=>`, longestPalindrome(string));
// Output: "bab"
string = "cbbd";
console.log(`longestPalindrome(${string}) :=>`, longestPalindrome(string));
// Output: "bb"
string = "xaabacxcabaaxcabaax";
console.log(`longestPalindrome(string) :=>`, longestPalindrome(string));
// Output: "xaabacxcabaax"
