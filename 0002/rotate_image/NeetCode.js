// NeetCode Spreadsheet Hint:
// rotate layer-by-layer, use that it's a square as advantage,
// rotate positions in reverse order, store a in temp,
// a = b, b = c, c = d, d = temp;
const rotate = (matrix) => {
    let left = 0;
    // because matrix is square, you don'tn eed matrix[0].length - 1
    let right = matrix.length - 1;
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let top = left;
            let bottom = right;
            // save the top-left value (acts as temp variabl)
            let topLeft = matrix[top][left + i];
            // move bottom-left into top-left
            matrix[top][left + i] = matrix[bottom - i][left];
            // move bottom-right into the bottom-left
            matrix[bottom - i][left] = matrix[bottom][right - i];
            // move top-right into the bottom-right
            matrix[bottom][right - i] = matrix[top + i][right];
            // move top-left into the top-right
            matrix[top + i][right] = topLeft;
        }
        right -= 1;
        left += 1;
    }
    console.log("rotated matrix :=>", matrix);
};
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
rotate(matrix);
// [[7,4,1],[8,5,2],[9,6,3]]
matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
];
rotate(matrix);
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
