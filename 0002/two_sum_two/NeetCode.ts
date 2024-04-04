// very basic way of introducing two pointer traversal
// logic completely relies on the input array, numbers, being sorted
// solved before seeing code (halfway through neetcode's explanation of problem)
const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(`twoSum(${nums}) :=>`, twoSum(nums, target));
// Output: [1,2]

nums = [2, 3, 4];
target = 6;
console.log(`twoSum(${nums}) :=>`, twoSum(nums, target));
// Output: [1,3]

nums = [-1, 0];
target = -1;
console.log(`twoSum(${nums}) :=>`, twoSum(nums, target));
// Output: [1,2]
