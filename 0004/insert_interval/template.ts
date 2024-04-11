const insert = (intervals: number[][], newInterval: number[]): number[][] => {};

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];
console.log(
  "insert(intervals, newInterval) :=>",
  insert(intervals, newInterval),
);
// Output: [[1,5],[6,9]]

intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
newInterval = [4, 8];
console.log(
  "insert(intervals, newInterval) :=>",
  insert(intervals, newInterval),
);
// Output: [[1,2],[3,10],[12,16]]
