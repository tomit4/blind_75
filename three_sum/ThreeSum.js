const threeSum = (nums) => {
    let i = 0;
    const sortedNums = nums.sort((a, b) => a - b);
    console.log("sortedNums :=>", sortedNums);
    const results = [];
    while (i < sortedNums.length - 1) {
        let j = i + 1;
        let k = j + 1;
        if (-nums[i] !== nums[j] + nums[k]) {
            j++;
            k++;
        }
        else {
            results.push([nums[i], nums[j], nums[k]]);
        }
        i++;
    }
    return results;
};
console.log("threeSum([-1, 0, 1, 2, -1, -4]) :=>", threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log("threeSum([0, 1, 1]) :=>", threeSum([0, 1, 1])); // []
console.log("threeSum([0, 0, 0]) :=>", threeSum([0, 0, 0])); // [[0, 0, 0]]
