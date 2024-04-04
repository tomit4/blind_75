const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    const target = -nums[i];
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      let curSum = nums[j] + nums[k];
      if (curSum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
        k--;
      } else if (curSum < target) {
        j++;
      } else {
        k--;
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

nums = [-2, 0, 0, 2, 2];
console.log("threeSum(nums) :=>", threeSum(nums));
// Output = [[-2,0,2]]]
