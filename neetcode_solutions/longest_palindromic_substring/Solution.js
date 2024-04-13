const longestPalindrome = (s) => {
    let longestPalin = "";
    for (let i = 0; i < s.length; i++) {
        let currentPalin = s[i];
        let right = 1;
        while (s[i] === s[i + right]) {
            currentPalin = s.substring(i, i + right + 1);
            right++;
        }
        let left = 1;
        while (i - left >= 0 && right < s.length && s[i - left] === s[i + right]) {
            currentPalin = s.substring(i - left, i + right + 1);
            left++;
            right++;
        }
        if (currentPalin.length >= longestPalin.length) {
            longestPalin = currentPalin;
        }
    }
    return longestPalin;
};
let s = "babad";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bab"
s = "cbbd";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bb"
