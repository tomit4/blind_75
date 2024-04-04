const longestPalindrome = (s: string): string => {
  let result = "";
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i;
    // odd length or even ?
    let r = s.length % 2 !== 0 ? i : i + 1;
    // as long as our two pointers are in bounds
    // and the beginning and ending chars are the same (i.e. palindrome)
    // update result to be the substring between l and r+1,
    // and expand our pointers outwards towards the ends of our total string
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
