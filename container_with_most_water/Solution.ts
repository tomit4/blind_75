const maxArea = (height: number[]): number => {
  if (!height.length) return 0;
  let i = 0;
  let j = height.length - 1;
  let sum = 0;
  while (i < j) {
    // total is equal to whichever element is less times the end pointer - 1 (the distance)
    let total = Math.min(height[i], height[j]) * (j - 1);
    // store the total
    if (total > sum) sum = total;
    // if the element towards the beginning pointer is less than the element towards the end pointer, iterate the beginner pointer
    if (height[i] <= height[j]) i++;
    // otherwise iterae the towards the end pointer
    else if (height[i] > height[j]) j--;
  }
  return sum;
};

console.log(
  "maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) :=>",
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
); // 49

console.log("maxArea([1, 1]) :=>", maxArea([1, 1])); // 1
console.log("maxArea([1, 2, 1]) :=>", maxArea([1, 2, 1])); // 1
