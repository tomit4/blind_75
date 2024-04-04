// O(n)
const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const curSum = numbers[left] + numbers[right];
    if (curSum > target) {
      right -= 1;
    } else if (curSum < target) {
      left -= 1;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
};

let numbers = [2, 7, 11, 15];
let target = 9;
console.log("twoSum(numbers, target) :=>", twoSum(numbers, target));
// Output: [1,2]

numbers = [2, 3, 4];
target = 6;
console.log("twoSum(numbers, target) :=>", twoSum(numbers, target));
// Output: [1,3]

numbers = [-1, 0];
target = -1;
console.log("twoSum(numbers, target) :=>", twoSum(numbers, target));
// Output: [1,2]
