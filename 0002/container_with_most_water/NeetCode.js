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
const maxArea = (height) => {
    let res = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        console.log("area :=>", area);
        res = Math.max(res, area);
        console.log("res :=>", res);
        // note that when equal, it doesn't matter which pointer you move
        if (height[left] < height[right]) {
            left += 1;
        }
        else {
            right -= 1;
        }
    }
    return res;
};
let h = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`maxArea([${h}]) :=>`, maxArea(h));
