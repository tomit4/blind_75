const maxSubArray = (nums) => {
    let j = 1;
    let sum = nums[0];
    let largestSoFar = sum;
    while (j < nums.length) {
        sum = sum + nums[j];
        if (sum === 0) {
            sum = nums[j];
        }
        largestSoFar = largestSoFar > sum ? largestSoFar : sum;
        j++;
    }
    return largestSoFar > Math.max(...nums) ? largestSoFar : Math.max(...nums);
};
let numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("maxSubArray(numbers) :=>", maxSubArray(numbers));
// expects 6
//
numbers = [1];
console.log("maxSubArray(numbers) :=>", maxSubArray(numbers));
// expects 1
numbers = [5, 4, -1, 7, 8];
console.log("maxSubArray(numbers) :=>", maxSubArray(numbers));
// expects 23
// failing case
numbers = [-2, 1];
console.log("maxSubArray(numbers) :=>", maxSubArray(numbers));
// expects 1, got -1
