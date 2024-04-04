const search = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
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

nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
console.log("search(nums, target) :=>", search(nums, target));
// Output: -1

nums = [1];
target = 0;
console.log("search(nums, target) :=>", search(nums, target));
// Output: -1
