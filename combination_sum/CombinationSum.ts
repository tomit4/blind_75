// Cannot solve 03/24/2024
const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];
  let temp: number[] = [];
  let i = 0;
  while (i < candidates.length) {
    const candidate = candidates[i];
    let remainder: number = target % candidate;
    temp = Array(Math.floor(target / candidate)).fill(candidate);
    while (temp.length > 0) {
      console.log("temp :=>", temp);
      const sum = temp.reduce((a, b) => {
        return a + b;
      }, 0);
      console.log("sum :=>", sum);
      if (sum === target) {
        result.push(temp);
        break;
      } else if (!candidates.includes(remainder)) {
        remainder = remainder + temp.pop()!;
        if (candidates.includes(remainder)) temp.push(remainder);
      } else {
        temp.pop();
      }
    }
    i++;
  }
  console.log("result :=>", result);
  return [[]];
};

console.log(
  "combinationSum([2, 3, 6, 7], 7) :=>",
  combinationSum([2, 3, 6, 7], 7),
);
// expects [[2, 2, 3], [7]]

console.log("combinationSum([2, 3, 5], 8) :=>", combinationSum([2, 3, 5], 8));
// expects [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

// console.log("combinationSum([2], 1) :=>", combinationSum([2], 1));
// expects []
