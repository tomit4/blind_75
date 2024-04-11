const canJump = (nums) => {
    let goal = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
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
