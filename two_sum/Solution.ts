const twoSum = (nums: number[], target: number): number[] => {
  const tempObj = {};
  for (let i = 0; i < nums.length; i++) {
    // uses number as key in "hashmap", not index,
    // that is why your solution here didn't work
    if (tempObj[target - nums[i]]) {
      return [tempObj[target - nums[i]].idx, i];
    }
    if (!tempObj[nums[i]]) {
      tempObj[nums[i]] = { val: nums[i], idx: i };
    }
  }
  return [-1, -1];
};

console.log("twoSum([2, 7, 11, 15], 9) :=>", twoSum([2, 7, 11, 15], 9));
console.log("twoSum([3, 2, 4], 6) :=>", twoSum([3, 2, 4], 6));
console.log("twoSum([3, 3], 6) :=>", twoSum([3, 3], 6));
console.log("twoSum([3, 2, 3], 6) :=>", twoSum([3, 2, 3], 6));
