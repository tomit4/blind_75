/* BRUTE FORCE O(n*2) solution, times out
const maxArea = (height: number[]): number => {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let minHeight = Math.min(height[i], height[j]);
      max = Math.max(max, (j - i) * minHeight);
    }
  }
  return max;
};
*/

const maxArea = (height: number[]): number => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const area = (right - left) * Math.min(height[right], height[left]);
    max = Math.max(max, area);
    if (height[left] <= height[right]) {
      left++;
    } else if (height[left] > height[right]) {
      right--;
    }
  }
  return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("maxArea(height) :=>", maxArea(height));
// Output: 49
height = [1, 1];
console.log("maxArea(height) :=>", maxArea(height));
// Output: 1
