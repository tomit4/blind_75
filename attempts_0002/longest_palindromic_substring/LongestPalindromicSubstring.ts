// DID NOT SOLVE: Recursive solution too inefficient 03/25/2024
// Could not find solution with reasonable time/space complexity

const isPalindrome = (s: string): boolean => {
  const reversedString = s.split("").reverse().join("");
  return s === reversedString;
};

// doesn't fail, but takes too long due to too large call stack
/*
const longestPalindrome = (s: string): string => {
  if (!s || !s.length) return "";
  if (isPalindrome(s)) {
    return s;
  } else {
    const subStr1 = s.substring(1, s.length);
    const subStr2 = s.substring(0, s.length - 1);
    return longestPalindrome(subStr1).length > longestPalindrome(subStr2).length
      ? longestPalindrome(subStr1)
      : longestPalindrome(subStr2);
  }
};
*/
const longestPalindrome = (s: string): string => {
  if (!s || !s.length) return "";
  if (isPalindrome(s)) return s;
  let i = 0;
  let j = s.length;
  let subStr1 = s.substring(1, j);
  let subStr2 = s.substring(0, j - 1);
  console.log("subStr1 :=>", subStr1);
  console.log("subStr2 :=>", subStr2);

  while (i < j) {
    if (!isPalindrome(subStr2)) {
      i++;
      subStr2 = s.substring(i, j - 1);
    } else if (!isPalindrome(subStr1)) {
      j--;
      subStr1 = s.substring(i + 1, j);
    } else {
      return subStr1.length > subStr2.length ? subStr1 : subStr2;
    }
  }
  return "";
};

let string = "babad";
console.log(`longestPalindrome(${string}) :=>`, longestPalindrome(string));
// Output: "bab"
string = "cbbd";
console.log(`longestPalindrome(${string}) :=>`, longestPalindrome(string));
// Output: "bb"

//
string = "xaabacxcabaaxcabaax";
console.log(`longestPalindrome(string) :=>`, longestPalindrome(string));
