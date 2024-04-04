// Slow (only beats 5% of all leetcode users)
const containsDuplicate = (nums: number[]): boolean => {
  const uniqueNums = Array.from(new Set([...nums])).sort((a, b) => a - b);
  const orderedNums = nums.sort((a, b) => a - b);
  if (uniqueNums.length !== orderedNums.length) return true;
  for (let i = 0; i < uniqueNums.length; i++) {
    if (uniqueNums[i] !== orderedNums[i]) {
      return true;
    }
  }
  return false;
};

console.log(
  "containsDuplicate([1, 2, 3, 1]) :=>",
  containsDuplicate([1, 2, 3, 1]),
);
console.log(
  "containsDuplicate([1, 2, 3, 4]) :=>",
  containsDuplicate([1, 2, 3, 4]),
);
console.log(
  "containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) :=>",
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]),
);

console.log("containsDuplicate([3, 1]) :=>", containsDuplicate([3, 1]));
