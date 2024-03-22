Intuition

There are two cases that result in a palindrome. One, is a character repeating indefinitely, and two is a mirror of characters from a unique center character. Also, these two cases are not mutually exclusive. So we can check if the characters are all the same, up until what point, and then check if there are mirror reflections of characters around that block. We need to do this at all the indices because we don't know at what point the inflection point of the palindrome will be.
Approach
Complexity

    Time complexity:

n-length of string
m-length of palindrome
O(n\*m)

    Space complexity:

O(m)
