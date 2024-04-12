const factorial = (n) => {
    if (n < 0) {
        throw new Error("Cannot calculate factorial of negative number");
    }
    if (n === 0)
        return 1;
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= 1;
    }
    return res;
};
const combination = (k, n) => {
    if (k === 0)
        return 1;
    if (k === 1)
        return n / k;
    return (n / k) * combination(k - 1, n - 1);
};
const uniquePaths = (m, n) => {
    return combination(m - 1, m + n - 2);
};
let m = 3;
let n = 7;
console.log("uniquePaths(m, n) :=>", uniquePaths(m, n));
// Output: 28
m = 3;
n = 2;
console.log("uniquePaths(m, n) :=>", uniquePaths(m, n));
// Output: 3
