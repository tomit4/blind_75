const longestPalindrome = (s) => {
    const reversedString = s.split("").reverse().join("");
    console.log("reversedString :=>", reversedString);
    return reversedString;
};
console.log('longestPalindrome("babad") :=>', longestPalindrome("babad"));
console.log('longestPalindrome("cbbd") :=>', longestPalindrome("cbbd"));
