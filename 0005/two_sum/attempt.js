const twoSum = (nums, target) => {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const restOfNums = nums.slice(i + 1, nums.length);
        const correspondingVal = target - nums[i];
        if (restOfNums.includes(correspondingVal)) {
            res.push(i);
            nums[i] = -1;
            res.push(nums.indexOf(correspondingVal));
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
