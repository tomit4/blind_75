// NeetCode Docs:
// visualize the decision tree, base case is curSum = or > target,
// each candidate can have children of itself or elements to right
// of it inorder to elim duplicate solutions;
const combinationSum = (candidates, target) => {
    const result = [];
    const dfs = (i, cur, total) => {
        // console.log("i :=>", i);
        // console.log("cur :=>", cur);
        // console.log("total :=>", total);
        if (total === target) {
            // create copy of cur before pushing to result
            result.push(cur.slice(0));
            return;
        }
        // iterator went out of bounds OR the total is greater than the target num
        if (i >= candidates.length || total > target) {
            return;
        }
        cur.push(candidates[i]);
        // keep on adding the same element until we traverse the whole array
        // or the total is greater than or equal to the target, if equal, it's appended to the results
        dfs(i, cur, total + candidates[i]);
        console.log("cur :=>", cur);
        cur.pop();
        dfs(i + 1, cur, total);
    };
    dfs(0, [], 0);
    return result;
};
let candidates = [2, 3, 6, 7];
let target = 7;
console.log("combinationSum(candidates, target) :=>", combinationSum(candidates, target));
// Output: [[2,2,3],[7]]
candidates = [2, 3, 5];
target = 8;
console.log("combinationSum(candidates, target) :=>", combinationSum(candidates, target));
// Output: [[2,2,2,2],[2,3,3],[3,5]]
candidates = [2];
target = 1;
console.log("combinationSum(candidates, target) :=>", combinationSum(candidates, target));
// Output: []
