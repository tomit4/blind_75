// O (m * n) time: m and n are dimensions of matrix
// O(1 space) as long as output is not counted as memory, otherwise it is O(m * n)
const spiralOrder = (matrix) => {
    const result = [];
    let left = 0;
    let right = matrix[0].length;
    let top = 0;
    let bottom = matrix.length;
    while (left < right && top < bottom) {
        // get every i in the top row
        for (let i = left; i < right; i++) {
            result.push(matrix[top][i]);
        }
        top += 1;
        // get every i in the right col
        for (let i = top; i < bottom; i++) {
            result.push(matrix[i][right - 1]);
        }
        right -= 1;
        if (!(left < right && top < bottom)) {
            break;
        }
        // get every i in the bottom row
        for (let i = right - 1; i > left - 1; i--) {
            result.push(matrix[bottom - 1][i]);
        }
        bottom -= 1;
        // get every i in the left col
        for (let i = bottom - 1; i > top - 1; i--) {
            result.push(matrix[i][left]);
        }
        left += 1;
    }
    return result;
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
