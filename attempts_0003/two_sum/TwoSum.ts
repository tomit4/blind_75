const twoSum = (nums: number[], target: number): number[] => {
  const res: number[] = [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] === undefined) {
      map[nums[i]] = i;
    } else {
      res.push(i);
    }
  }
  return res;
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log("twoSum(nums, target) :=>", twoSum(nums, target));
// Output: [0,1]

nums = [3, 2, 4];
target = 6;
console.log("twoSum(nums, target) :=>", twoSum(nums, target));
// Output: [1,2]

nums = [3, 3];
target = 6;
console.log("twoSum(nums, target) :=>", twoSum(nums, target));
// Output: [0,1]
