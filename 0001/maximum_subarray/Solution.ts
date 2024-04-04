// very succinct answer...
const maxSubArray = (nums: number[]): number => {
  let local = 0;
  let global = -Infinity;

  for (const num of nums) {
    local = Math.max(num, local + num);
    global = Math.max(global, local);
  }

  return global;
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
// expects 1
