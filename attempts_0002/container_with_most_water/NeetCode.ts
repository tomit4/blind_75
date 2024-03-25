/*
const maxArea = (height: number[]): number => {
  // Brute Force
  // time limit exceeded
  let res = 0;
  for (let l = 0; l <= height.length; l++) {
    for (let r = l + 1; r < height.length; r++) {
      let area = r - l * Math.min(height[l], height[r]);
      res = Math.max(res, area);
    }
  }
  return res;
};
*/

// Linear Time Solution O(n)
const maxArea = (height: number[]): number => {
  let res = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // the area is always calculated by the distance between the
    // two pointers (left and right) multiplied by whichever element is less than
    const area = (right - left) * Math.min(height[left], height[right]);
    res = Math.max(res, area);

    // increment or decrement the pointer depending on which is greater/less than
    // note that when equal, it doesn't matter which pointer you move (hence else and note else if)
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return res;
};

let h = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`maxArea([${h}]) :=>`, maxArea(h));
