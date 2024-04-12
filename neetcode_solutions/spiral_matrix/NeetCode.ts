const spiralOrder = (matrix: number[][]): number[] => {
  const res: number[] = [];
  let left = 0;
  let right = matrix[0].length; // columns
  let top = 0;
  let bottom = matrix.length; // rows

  while (left < right && top < bottom) {
    // get every i in the top row
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // get every i in the right column
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right--;

    // handles edge case where single row or column matrix
    if (!(left < right && top < bottom)) break;

    // get every i in the bottom row
    for (let i = right - 1; i > left - 1; i--) {
      res.push(matrix[bottom - 1][i]);
    }
    bottom--;
    // get every i in the left column
    for (let i = bottom - 1; i > top - 1; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let newMatrix = spiralOrder(matrix);
console.log("newMatrix :=>", newMatrix);
// Output: [1,2,3,6,9,8,7,4,5]
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
newMatrix = spiralOrder(matrix);
console.log("newMatrix :=>", newMatrix);
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
