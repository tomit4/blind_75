const longestPalindrome = (s: string): string => {
  const reversedString = s.split("").reverse().join("");
  console.log("reversedString :=>", reversedString);
  if (s === reversedString) return reversedString;
  // cannot figure out beyond here
};

console.log('longestPalindrome("babad") :=>', longestPalindrome("babad"));
console.log('longestPalindrome("cbbd") :=>', longestPalindrome("cbbd"));
