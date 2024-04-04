const combinationSum = (candidates: number[], target: number): number[][] => {};

let candidates = [2, 3, 6, 7];
let target = 7;
console.log(
  "combinationSum(candidates, target) :=>",
  combinationSum(candidates, target),
);
// Output: [[2,2,3],[7]]

candidates = [2, 3, 5];
target = 8;
console.log(
  "combinationSum(candidates, target) :=>",
  combinationSum(candidates, target),
);
// Output: [[2,2,2,2],[2,3,3],[3,5]]

candidates = [2];
target = 1;
console.log(
  "combinationSum(candidates, target) :=>",
  combinationSum(candidates, target),
);
// Output: []
