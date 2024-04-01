const threeSum = (nums: number[]): number[][] => {
  let res: number[][] = [];

  // first sort the array so duplicate values are next to each other
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    // since we sorted the array,
    // if our next element is the same
    // as the current, skip the loop
    if (i > 0 && a == nums[i - 1]) {
      continue;
    }
    // otherwise we set up a classic two pointer
    // starting at the next element (left)
    // and the last element (right)
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      // we then sum our first, second, and last elements
      let threeSum = a + nums[left] + nums[right];
      // again, since its sorted, if the sum is greater than 0,
      // we know that the rightmost element was the greater value,
      // thusly we decrement the right pointer and continue our while loop
      if (threeSum > 0) {
        right -= 1;
        // otherwise the leftmost values are "greater" (i.e. very negative value)
        // so increment the left pointer onward
      } else if (threeSum < 0) {
        left += 1;
        // otherwise we have a threeSum!
      } else {
        res.push([a, nums[left], nums[right]]);
        // the pointer logic here is complicated,
        // but we must do it (otherwise, infinite loop)
        // we simply move along like a normal loop to the next iteration...
        left += 1;
        // but we must check if the next value has the same value
        // and move to the next until we reach a new element
        // (this is equivalent to our continue statement above)
        // we && also check if the two pointers have crossed,
        // in which case we break out of this loop
        // (and the greater while loop this is inside of)
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }
  return res;
};

console.log(
  "threeSum([-1, 0, 1, 2, -1, -4]) :=>",
  threeSum([-1, 0, 1, 2, -1, -4]),
);
// [[-1, -1, 2], [-1, 0, 1]]

console.log("threeSum([0, 1, 1]) :=>", threeSum([0, 1, 1])); // []
console.log("threeSum([0, 0, 0]) :=>", threeSum([0, 0, 0])); // [[0, 0, 0]]
