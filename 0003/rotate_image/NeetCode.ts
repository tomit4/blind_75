/**
 Do not return anything, modify matrix in-place instead.
 */
// O(n ^ 2)
const rotate = (matrix: number[][]): void => {
  let left = 0;
  // start off right at number of columns
  let right = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;

      // save the top-left value
      let topLeft = matrix[top][left + i];

      // move bottom left into top left
      matrix[top][left + i] = matrix[bottom - i][left];

      // move bottom right into bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i];

      // move top right into bottom right
      matrix[bottom][right - i] = matrix[top + i][right];

      // move top left into top right
      matrix[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log("rotatedMatrix :=>", matrix);
// Output: [[7,4,1],[8,5,2],[9,6,3]]

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix);
console.log("rotatedMatrix :=>", matrix);
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
