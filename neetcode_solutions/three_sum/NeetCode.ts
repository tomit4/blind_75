// O(n^2)
const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];
  nums.sort((a, b) => a - b); // O(n*log(n))
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (i > 0 && a === nums[i] - 1) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let threeSum = a + nums[left] + nums[right];
      if (threeSum > 0) {
        right -= 1;
      } else if (threeSum < 0) {
        left += 1;
      } else {
        result.push([a, nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output: [[-1,-1,2],[-1,0,1]]

nums = [0, 1, 1];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output: []

nums = [0, 0, 0];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output: [[0,0,0]]
