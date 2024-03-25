const longestPalindrome = (s: string): string => {
  let longestPalindrome = "";

  for (let i = 0; i < s.length; i++) {
    let currentPalindrome = s[i];
    let right = 1;
    // as long as the current and next character are the same character
    while (s[i] === s[i + right]) {
      // append the next next character to the currentPalindrome string
      currentPalindrome = s.substring(i, i + right + 1);
      right += 1;
    }
    // once we encounter a different character...
    let left = 1;
    while (
      // as long as we're on at least the third character
      i - left >= 0 &&
      // and neither the current nor the rightmost pointer have reached the end of the string
      i + right < s.length &&
      // and the leftmost character we've traversed is equal to the rightmost character we've traversed
      s[i - left] === s[i + right]
    ) {
      // then we have found a palindrome, and slice it off from the string
      // difficult to understand indexing here...
      currentPalindrome = s.substring(i - left, i + right + 1);
      // iterate both pointers down the total string
      left++;
      right++;
    }
    // set longestPalindrome to whichever one we've found that is longest
    if (currentPalindrome.length >= longestPalindrome.length) {
      longestPalindrome = currentPalindrome;
    }
  }

  return longestPalindrome;
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
