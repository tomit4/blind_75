// Not NeetCode's solution, more concise,
// takes into account array of entirely negative integers
const maxSubArray = (nums: number[]): number => {
  let maxSub = -Infinity;
  let curSum = -Infinity;

  for (const num of nums) {
    curSum = Math.max(num, curSum + num);
    maxSub = Math.max(curSum, maxSub);
  }

  return maxSub;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("maxSubArray(nums) :=>", maxSubArray(nums));
// Output: 6

nums = [1];
console.log("maxSubArray(nums) :=>", maxSubArray(nums));
// Output: 1

nums = [5, 4, -1, 7, 8];
console.log("maxSubArray(nums) :=>", maxSubArray(nums));
// Output: 23
