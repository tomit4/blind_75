const twoSum = (nums, target) => {
    const prevMap = {}; // { val : index }
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n;
        if (diff in prevMap) {
            return [prevMap[diff], i];
        }
        prevMap[n] = i;
    }
    return [];
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
