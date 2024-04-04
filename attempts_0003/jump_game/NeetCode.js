const canJump = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        console.log("nums[i] :=>", nums[i]);
        console.log("nums.indexOf(nums[i + nums[i]]) :=>", nums.indexOf(nums[i + nums[i]]));
        console.log("nums.length - 1 :=>", nums.length - 1);
        if (nums.indexOf(nums[i + nums[i]]) === nums.length - 1) {
            return true;
        }
    }
    return false;
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
