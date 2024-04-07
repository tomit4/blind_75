const search = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // continually recalculate mid based off of new left/right vals
    // until mid is equal to target
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;

    // left sorted portion
    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        // target is < nums[mid], but is > nums[left]
        right = mid - 1;
      }
    } else {
      // right sorted portion
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        // target is > nums[mid], but is < nums[right]
        left = mid + 1;
      }
    }
  }
  return -1;
};

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
