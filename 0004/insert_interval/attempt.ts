// Not mine, trickery using NeetCode's solution from mergeIntervals
const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  const output = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];
    const lastEnd = output[output.length - 1][1];

    if (start <= lastEnd) {
      output[output.length - 1][1] = Math.max(lastEnd, end);
    } else {
      output.push([start, end]);
    }
  }
  return output;
};

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
