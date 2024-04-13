## 5. Longest Palindromic Substring

Given a string s, return the longest
palindromic
substring
in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.

### Hints:

- Start by instantiating a longestPalindrome variable to an empty string

- Iterate through the string from left to right with two pointers both
  starting at 1. As long as you find repeating characters, construct a
  currentPalindrome variable first in one inner while loop

- Second lengthy inner while loop (3 && conditions) with two pointers. If
  passed, currentPalindrome is updated to be a substring between left and right
  pointers(using i to either subtract or add to the substring constructor).
  Iterate both left and right pointers after

- Update longestPalindrome to currentPalindrome if currentPalindrome length is
  greater than longestPalindrome length

- Don't look at NeetCode solution (he gets it wrong or I failed to translate it
  to TS properly, see Solution.ts instead if you need to look at answer)
