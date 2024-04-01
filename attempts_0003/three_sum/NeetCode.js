const threeSum = (nums) => {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (i > 0 && a == nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let threeSum = a + nums[left] + nums[right];
            if (threeSum > 0) {
                right -= 1;
            }
            else if (threeSum < 0) {
                left += 1;
            }
            else {
                res.push([a, nums[left], nums[right]]);
                left += 1;
                while (nums[left] === nums[left - 1] && left < right) {
                    left += 1;
                }
            }
        }
    }
    return res;
};
console.log("threeSum([-1, 0, 1, 2, -1, -4]) :=>", threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1, -1, 2], [-1, 0, 1]]
console.log("threeSum([0, 1, 1]) :=>", threeSum([0, 1, 1])); // []
console.log("threeSum([0, 0, 0]) :=>", threeSum([0, 0, 0])); // [[0, 0, 0]]
