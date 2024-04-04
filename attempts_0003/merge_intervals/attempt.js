const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]); // O(n * log(n))
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i + 1] !== undefined) {
            if (intervals[i][1] >= intervals[i + 1][0]) {
                intervals[i] = [intervals[i][0], intervals[i + 1][1]];
                intervals.splice(i + 1, 1);
            }
        }
    }
    return intervals;
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
    [1, 4],
    [4, 5],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1,5]]
// failing case, got [[1, 4]] because did not take into account order
intervals = [
    [1, 4],
    [0, 4],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[0,4]]
