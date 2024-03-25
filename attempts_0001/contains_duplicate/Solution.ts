const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (set.has(item)) {
      return true;
    }
    set.add(item);
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
