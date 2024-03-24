// Do not return anything, modify matrix in-place instead
// NOT SOLVED 03/24/2024
// this is my naive approach (creates new matrix, and therefore does not solve problem):
const rotate = (matrix: number[][]): void => {
  let newMatrix: number[][] = [[]];
  for (let i = 0; i < matrix.length; i++) {
    let temp: number[] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      temp.unshift(matrix[j][i]);
    }
    console.log("temp :=>", temp);
    newMatrix[i] = temp;
    // matrix[i] = temp; // this won't work as it adjusts the values of the initial for loop
  }
  console.log("newMatrix :=>", newMatrix);
  // console.log("matrix :=>", matrix); // incorrect
};

// solution on leetcode (not yours)
const rotate2 = (matrix: number[][]): void => {
  // transposing the matrix in-place
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i !== j) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  // reversing the rows of the transposed matrix in-place
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = temp;
    }
  }
  console.log("matrix :=>", matrix);
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate2(matrix);

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate2(matrix);
