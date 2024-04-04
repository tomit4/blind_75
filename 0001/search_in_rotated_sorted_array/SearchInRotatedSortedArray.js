const search = (nums, target) => {
    const midIndex = Math.floor(nums.length / 2);
    console.log("midIndex :=>", midIndex);
    console.log("nums[midIndex] :=>", nums[midIndex]);
    // if (nums[midIndex] === target) {
    // return midIndex;
    // }
    const left = nums.slice(0, midIndex);
    const right = nums.slice(midIndex, nums.length);
    const largestElemInLeft = left[left.length - 1];
    console.log("largestElemInLeft :=>", largestElemInLeft);
    const largestElemInRight = right[right.length - 1];
    console.log("largestElemInRight :=>", largestElemInRight);
    if (target < largestElemInLeft) {
        console.log("array is rotated");
    }
    console.log("left :=>", left);
    console.log("right :=>", right);
    return 0;
};
console.log("search([4, 5, 6, 7, 0, 1, 2], 0) :=>", search([4, 5, 6, 7, 0, 1, 2], 0)); // expects 4
/*
console.log(
  "search([4, 5, 6, 7, 0, 1, 2], 3) :=>",
  search([4, 5, 6, 7, 0, 1, 2], 3),
); // expects -1
console.log("search([1], 0) :=>", search([1], 0)); // expects -1
*/
