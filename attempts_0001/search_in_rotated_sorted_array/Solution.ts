// Summary: continually updates two pointers to point to a previously established mid pointer
// the while loop re-establishes the mid point based off of updated low/high indexes
const search = (nums: number[], target: number): number => {
  // two pointer solution
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    // always grab the middle element
    const mid = Math.floor((low + high) / 2);
    const num = nums[mid];

    // return the index if it equal the target
    if (num === target) return mid;

    // the leftmost elem is less than or equal to the middle element
    // meaning that the left side is sorted
    if (nums[low] <= num) {
      // if the leftmost elem is less than or equal to the target
      // and the target is less than or equal to the middle element
      if (nums[low] <= target && target <= num) {
        // traverse backwards towards the left (from the middle)
        high = mid - 1;
      } else {
        // otherwise traverse forwards towards the right (from the middle)
        low = mid + 1;
      }
      // the leftmost elem is greater than the middle element
      // meaning that the right side is sorted
    } else {
      // if the middle element is less than or equal to the target and
      // the target is less than or equal to the rightmost element
      if (num <= target && target <= nums[high]) {
        // traverse forwards towards the right (from the middle)
        low = mid + 1;
      } else {
        // otherwise traverse  backwards towards the left (from the middle)
        high = mid - 1;
      }
    }
  }
  // we didn't find the element
  return -1;
};
