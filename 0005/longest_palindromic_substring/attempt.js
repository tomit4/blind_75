const longestPalindrome = (s) => {
    const midIndex = Math.floor((s.length - 1) / 2);
    console.log("s[midIndex] :=>", s[midIndex]);
    let res = s[midIndex];
    let left = midIndex - 1;
    let isEven = Math.floor((s.length - 1) / 2) % 2 === 0;
    let right = isEven ? midIndex : midIndex + 1;
    while (s[left] && s[right]) {
        if (s[left] === s[right]) {
            res = s[left] + res + s[right];
        }
        left--;
        right++;
    }
    return res;
};
let s = "babad";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bab" or "aba"
s = "cbbd";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "bb"
s = "abadb";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "aba"
s = "abda";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: ""
s = "bdaa";
console.log("longestPalindrome(s) :=>", longestPalindrome(s));
// Output: "aa"
