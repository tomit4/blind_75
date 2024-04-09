const combinationSum = (candidates: number[], target: number): number[][] => {
  const res: number[][] = [];
  const dfs = (i: number, cur: number[], total: number) => {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);
    cur.pop();
    dfs(i + 1, cur, total);
  };
  dfs(0, [], 0);
  return res;
};

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
