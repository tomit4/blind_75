function maxSubArray(nums: number[]): number {
  let local = 0;
  let global = -Infinity;

  for (const num of nums) {
    local = Math.max(num, local + num);
    if (local > global) {
      global = local;
    }
  }

  return global;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("maxSubArray(nums) :=>", maxSubArray(nums));
// Output: 6

nums = [1];
console.log("maxSubArray(nums) :=>", maxSubArray(nums));
// Output: 1

nums = [5, 4, -1, 7, 8];
console.log("maxSubArray(nums) :=>", maxSubArray(nums));
// Output: 23
