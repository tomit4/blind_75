const twoSum = (nums: number[], target: number): number[] => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[i] = nums[i];
  }
  console.log("map :=>", map);
  for (const key in map) {
    const property = map[key];
  }
  return [0];
};

console.log("twoSum([2, 7, 11, 15], 9) :=>", twoSum([2, 7, 11, 15], 9));
console.log("twoSum([3, 2, 4], 6) :=>", twoSum([3, 2, 4], 6));
console.log("twoSum([3, 3], 6) :=>", twoSum([3, 3], 6));
console.log("twoSum([3, 2, 3], 6) :=>", twoSum([3, 2, 3], 6));
/*
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
// */
