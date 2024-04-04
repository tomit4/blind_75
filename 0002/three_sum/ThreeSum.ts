// Could not solve 03/25/2024
const sumArray = (nums: number[]): number => {
  return nums.reduce((a, b) => {
    return a + b;
  }, 0);
};

// NOT A sliding window problem
const threeSum = (nums: number[]): number[][] => {
  let i = 0;
  let result: number[][] = [];
  while (i < nums.length) {
    let j = i + 1;
    let sumOfTwo = i + j;
    let k = sumOfTwo * -1;
    if (nums.includes(k) && nums.indexOf(i) !== nums.indexOf(k)) {
      let subRes = [nums[i], nums[j], nums[nums.indexOf(k)]];
      result.push(subRes);
    }
    i++;
  }
  return result;
};
console.log(
  "threeSum([-1, 0, 1, 2, -1, -4]) :=>",
  threeSum([-1, 0, 1, 2, -1, -4]),
);
// [[-1, -1, 2], [-1, 0, 1]]

console.log("threeSum([0, 1, 1]) :=>", threeSum([0, 1, 1])); // []
console.log("threeSum([0, 0, 0]) :=>", threeSum([0, 0, 0])); // [[0, 0, 0]]
