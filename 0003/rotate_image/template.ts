/**
 Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]): void => {};

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
