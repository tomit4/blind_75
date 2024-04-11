// Time: O(n * m)
// Space: O(n)
const uniquePaths = (m: number, n: number): number => {
  let row: number[] = Array(n).fill(1);

  for (let i = 0; i < m - 1; i++) {
    let newRow = Array(n).fill(1);
    for (let j = n - 2; j >= 0; j--) {
      newRow[j] = newRow[j + 1] + row[j];
    }
    row = newRow;
  }
  return row[0];
};

let m = 3; // number of rows
let n = 7; // number of columns
console.log("uniquePaths(m, n) :=>", uniquePaths(m, n));
// Output: 28

m = 3;
n = 2;
console.log("uniquePaths(m, n) :=>", uniquePaths(m, n));
// Output: 3
