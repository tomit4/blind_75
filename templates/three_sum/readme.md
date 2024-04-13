## 15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

### Hints:

- Instantiate an empty result array, which will hold a matrix

- Sort the nums array

- Loop through the newly sorted nums array

- Exception condition: if the current number is equal to the previous, then skip
  it

- Instantiate two pointers, left at one plus i, and right at the end of the nums
  array

- Instantiate a classic two pointer while loop inside for loop

- Calculate threeSum of current number plus the element at left and element at
  right pointers

- If threeSum is greater than 0, decrement right

- If threeSum is less than 0, increment left

- else threeSum is 0, and add array of currentElement, leftElement, and
  rightElement to results matrix

- AND also increment left again, to keep pointer going

- Add while exception clause that skips to the next leftmost element if it is
  the same as the previous (and doesn't reach overlap the rightmost pointer)

- And yeah, return the result
