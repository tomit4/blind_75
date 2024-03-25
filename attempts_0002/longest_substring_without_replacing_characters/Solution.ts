const lengthOfLongestSubstring = (s: string): number => {
  if (!s || !s.length) return 0;

  const max = new Set([1]);
  let subStr = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = subStr.indexOf(char);
    // if we cannot find character
    if (index === -1) {
      // append it to substring
      subStr += char;
      // and add the new length to our max Set
      max.add(subStr.length);
    } else {
      // otherwise we chop off the first character from
      // the beginning of the subStr
      // and append to the end the latest character
      subStr = subStr.slice(index + 1).concat(char);
    }
  }

  return Math.max(...max);
};

let string = "abcabcbb";
console.log(
  "lengthOfLongestSubstring(string) :=>",
  lengthOfLongestSubstring(string),
);

// Output: 3

string = "bbbbb";
console.log(
  "lengthOfLongestSubstring(string) :=>",
  lengthOfLongestSubstring(string),
);
// Output: 1

string = "pwwkew";
console.log(
  "lengthOfLongestSubstring(string) :=>",
  lengthOfLongestSubstring(string),
);
// Output: 3
