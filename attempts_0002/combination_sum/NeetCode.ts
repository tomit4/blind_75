// NeetCode Docs:
// visualize the decision tree, base case is curSum = or > target,
// each candidate can have children of itself or elements to right
// of it inorder to elim duplicate solutions;
const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];

  const dfs = (i: number, cur: number[], total: number): void => {
    if (total === target) {
      // create copy of cur before pushing to result
      result.push(cur.slice(0));
      return;
    }
    // iterator went out of bounds OR the total is greater than the target num
    if (i >= candidates.length || total > target) {
      return;
    }

    // keep on adding the same element until we traverse the whole array
    // or the total is greater than or equal to the target, if equal, it's appended to the results
    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);
    // we pop it off here, if it didn't return the target,
    // we try every remaining element in the array (i.e. dfs(i + 1, cur, total))
    // i.e. [2, 2, 2, 2]
    // i.e. [2, 2, 2, 3]
    // i.e. [2, 2, 2, 6]
    // i.e. [2, 2, 2, 7]
    cur.pop();
    dfs(i + 1, cur, total);
  };

  dfs(0, [], 0);
  return result;
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
