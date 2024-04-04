// NOT SOLVED 03/25/2024
// solution looked at
const twoSum = (nums, target) => {
    let result = [];
    const map = {};
    for (let [i, num] of nums.entries()) {
        const difference = target - num;
        // cannot use because map[difference] could be 0
        // if (map[difference]) {}
        if (map[difference] !== undefined) {
            result = [map[difference], i];
        }
        else {
            map[num] = i;
        }
    }
    /* same with traditional for loop
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const difference = target - num;
      if (map[difference] !== undefined) {
        result = [map[difference], i];
      } else {
        map[num] = i;
      }
    }
    */
    return result;
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log("twoSum(nums, target) :=>", twoSum(nums, target));
// [0,1]
nums = [3, 2, 4];
target = 6;
console.log("twoSum(nums, target) :=>", twoSum(nums, target));
// [1,2]
nums = [3, 3];
target = 6;
console.log("twoSum(nums, target) :=>", twoSum(nums, target));
// [0,1]
