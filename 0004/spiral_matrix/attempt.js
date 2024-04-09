const spiralOrder = (matrix) => {
    const res = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length;
    let bottom = matrix[matrix.length - 1].length;
    console.log("bottom :=>", bottom);
    while (left < right) {
        res.push(matrix[0][left]);
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
spiralOrder(matrix);
console.log("matrix :=>", matrix);
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
