const twoSum = (numbers, target) => {
    let map = {};
    for (let i = 0; i < numbers.length; i++) {
        if (!map[i] && i !== target - nums[i]) {
            map[i] = target - nums[i];
        }
    }
    for (const [key, value] of Object.entries(map)) {
        if (numbers.includes(Number(value))) {
            console.log("numbers includes value :=>", value);
        }
    }
    console.log("map :=>", map);
    return [];
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(`twoSum(${nums}) :=>`, twoSum(nums, target));
// Output: [1,2]
nums = [2, 3, 4];
target = 6;
console.log(`twoSum(${nums}) :=>`, twoSum(nums, target));
// Output: [1,3]
nums = [-1, 0];
target = -1;
console.log(`twoSum(${nums}) :=>`, twoSum(nums, target));
// Output: [1,2]
