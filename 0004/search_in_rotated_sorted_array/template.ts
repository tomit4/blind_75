const search = (nums: number[], target: number): number => {};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 4

nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
console.log("search(nums, target) :=>", search(nums, target));
// Output: -1

nums = [1];
target = 0;
console.log("search(nums, target) :=>", search(nums, target));
// Output: -1
