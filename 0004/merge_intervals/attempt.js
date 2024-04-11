// mergeSort style
const merge = (intervals) => {
    const res = [];
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        let nextInterval = intervals[i + 1];
        let pair = [interval[0], interval[1]];
        while (nextInterval !== undefined) {
            if (interval[1] <= nextInterval[0]) {
                pair[1] = nextInterval[0];
            }
            if (interval[0] >= nextInterval[1]) {
                pair[1] = interval[0];
            }
            break;
        }
        res.push(pair);
    }
    return res;
};
let intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1,6],[8,10],[15,18]]
//
intervals = [
    [1, 3],
    [2, 6],
    [5, 10],
    [9, 18],
    [19, 20],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1, 18],[19,20]]
intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [19, 20],
];
console.log("merge(intervals) :=>", merge(intervals));
// Output: [[1,6],[8,10],[15,18],[19,20]]
/*
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
*/
