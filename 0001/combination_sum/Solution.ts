const combinationSum = (candidates: number[], target: number): number[][] => {
  const ans: number[][] = [];

  const bt = (i: number, path: number[], sum: number): void => {
    // if the sum is greater than or equal to the target
    if (sum >= target) {
      // if the sum is equal to the target, then push the path array to the ans array
      if (sum === target) ans.push([...path]);
      // either way, return out of the helper func bt
      return;
    }

    // otherwise, the sum is less than the target...
    // so we loop over the remaining candidates
    for (let j = i; j < candidates.length; j++) {
      // and push them into the path
      path.push(candidates[j]);
      // recursively passing them back to the bt func with the new variables
      // an index count j, the new path array, and the cumulative sum
      bt(j, path, sum + candidates[j]);
      // afterwards we remove the last element of the path
      path.pop();
    }
  };

  bt(0, [], 0);
  return ans;
};
