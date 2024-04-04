const spiralOrder = (matrix: number[][]): number[] => {
  // Time: O(m * n), Space: O(1)
  const res: number[] = [];
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
    // get every i in the top row
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top += 1;

    // get every in the right column
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right -= 1;

    // try to run with just 1 column or 1 row matrix,
    // the reason for this check will become obvious
    if (!(left < right && top < bottom)) {
      break;
    }

    // get every i in the bottom row
    for (let i = right - 1; i > left - 1; i--) {
      res.push(matrix[bottom - 1][i]);
    }
    bottom -= 1;

    // get every i in the left column
    for (let i = bottom - 1; i > top - 1; i--) {
      res.push(matrix[i][left]);
    }
    left += 1;
  }
  return res;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [1,2,3,6,9,8,7,4,5]
console.log("spiralOrder(matrix) :=>", spiralOrder(matrix));

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log("spiralOrder(matrix) :=>", spiralOrder(matrix));
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
