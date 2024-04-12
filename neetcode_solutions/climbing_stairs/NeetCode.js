// continually updates one until solution is reached
// VERY similar to fibonacci sequence (kind of just in reverse??)
const climbStairs = (n) => {
    let one = 1;
    let two = 1;
    for (let i = 0; i < n - 1; i++) {
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one;
};
let n = 2;
console.log("climbStairs(n) :=>", climbStairs(n));
// Output: 2
n = 3;
console.log("climbStairs(n) :=>", climbStairs(n));
// Output: 3
