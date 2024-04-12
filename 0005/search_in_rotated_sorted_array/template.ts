const search = (nums: number[], target: number): number => {};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 4

nums = [0, 1, 2, 4, 5, 6, 7];
target = 0;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 0

nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
console.log("search(nums, target) :=>", search(nums, target));
// Output: -1

nums = [1];
target = 0;
console.log("search(nums, target) :=>", search(nums, target));
// Output: -1

nums = [1];
target = 1;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 0

nums = [1, 3];
target = 3;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 1

nums = [3, 5, 1];
target = 5;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 1

nums = [4, 5, 6, 7, 0, 1, 2];
target = 5;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 1

nums = [5, 1, 2, 3, 4];
target = 1;
console.log("search(nums, target) :=>", search(nums, target));
// Output: 1
