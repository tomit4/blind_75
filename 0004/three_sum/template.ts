const threeSum = (nums: number[]): number[][] => {};

let nums = [-1, 0, 1, 2, -1, -4];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output: [[-1,-1,2],[-1,0,1]]

nums = [0, 1, 1];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output: []

nums = [0, 0, 0];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output: [[0,0,0]]

nums = [-2, 0, 0, 2, 2];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output = [[-2,0,2]]]
