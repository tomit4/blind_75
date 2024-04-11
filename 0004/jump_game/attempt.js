const canJump = (nums) => {
    let canJump = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + nums[i]] !== undefined &&
            nums[i + nums[i]] === nums[nums.length - 1]) {
            canJump = true;
        }
    }
    return canJump;
};
let nums = [2, 3, 1, 1, 4];
console.log("canJump(nums) :=>", canJump(nums));
// Output: true
nums = [3, 2, 1, 0, 4];
console.log("canJump(nums) :=>", canJump(nums));
// Output: false
nums = [0];
console.log("canJump(nums) :=>", canJump(nums));
// Output: true
nums = [1];
console.log("canJump(nums) :=>", canJump(nums));
// Output: true
