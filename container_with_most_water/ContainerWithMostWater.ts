const maxArea = (height: number[]): number => {
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i < j) {
    const distance = j - i;
    if (area < height[i] * distance) {
      area = height[i] * distance;
      console.log("area :=>", area);
      i++;
      // j--;
    } else {
      // j--;
      i++;
    }
  }
  return area;
};
console.log(
  "maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) :=>",
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
); // 49

// console.log("maxArea([1, 1]) :=>", maxArea([1, 1])); // 1
// fails
console.log("maxArea([1, 2, 1]) :=>", maxArea([1, 2, 1])); // expected 2, got 1
