const spiralOrder = (matrix: number[][]): number[] => {};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("spiralOrder(matrix) :=>", spiralOrder(matrix));
// Output: [1,2,3,6,9,8,7,4,5]

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log("spiralOrder(matrix) :=>", spiralOrder(matrix));
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
