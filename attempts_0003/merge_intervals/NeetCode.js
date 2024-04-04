const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]); // O(n * log(n))
    const output = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const start = intervals[i][0];
        const end = intervals[i][1];
        const lastEnd = output[output.length - 1][1];
        if (start <= lastEnd) {
            output[output.length - 1][1] = Math.max(lastEnd, end);
        }
        else {
            output.push([start, end]);
        }
    }
    return output;
};
let intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1,6],[8,10],[15,18]]
intervals = [
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1,6],[8,10],[15,18]]
intervals = [
    [1, 4],
    [4, 5],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1,5]]
intervals = [
    [1, 4],
    [0, 4],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[0,4]]
intervals = [
    [1, 4],
    [2, 3],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1,4]]
