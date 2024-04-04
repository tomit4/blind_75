const maxSubArray = (nums) => {
    let maxSub = nums[0];
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += n;
        maxSub = Math.max(maxSub, curSum);
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
