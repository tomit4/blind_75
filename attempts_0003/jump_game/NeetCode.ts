const canJump = (nums: number[]): boolean => {
  let lastJump = nums.length - 1;

  for (let i = lastJump - 1; i > 0; i--) {
    if (nums[i] >= lastJump - i) {
      lastJump = i;
    }
  }

  return nums[0] >= lastJump;
};
/*
let nums = [2, 3, 1, 1, 4];
console.log("canJump(nums) :=>", canJump(nums));
// Output: true

nums = [3, 2, 1, 0, 4];
console.log("canJump(nums) :=>", canJump(nums));
// Output: false

*/
let nums = [0]; // failing case
console.log("canJump(nums) :=>", canJump(nums));
// Output: true
nums = [1]; // failing case
console.log("canJump(nums) :=>", canJump(nums));
// Output: true
