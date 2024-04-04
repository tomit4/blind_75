const merge = (intervals: number[][]): number[][] => {};

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
