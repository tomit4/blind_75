## 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

<img src="./question_11.jpg" />

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

### Hints:

- Establish two pointers, left, right, and max

- Classic two pointer solution, start left and right where you know they
  probably go

- The width is the difference between right and left

- The area is the lower of the two heights were comparing times the width

- The max is updated based off of the area

- Increment Or Decrement only one of the two pointers (left, right) based off of
  which height is greater/less

- If the two heights are equal, move either pointer
