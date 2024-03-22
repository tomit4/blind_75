const containsDuplicate = (nums) => {
    const uniqueNums = Array.from(new Set([...nums])).sort((a, b) => a - b);
    console.log("uniqueNums :=>", uniqueNums);
    const orderedNums = nums.sort((a, b) => a - b);
    console.log("orderedNums :=>", orderedNums);
    if (uniqueNums.length !== orderedNums.length)
        return true;
    for (let i = 0; i < uniqueNums.length; i++) {
        if (uniqueNums[i] !== orderedNums[i]) {
            console.log("here :=>");
            return true;
        }
    }
    return false;
};
console.log("containsDuplicate([1, 2, 3, 1]) :=>", containsDuplicate([1, 2, 3, 1]));
console.log("containsDuplicate([1, 2, 3, 4]) :=>", containsDuplicate([1, 2, 3, 4]));
console.log("containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) :=>", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log("containsDuplicate([3, 1]) :=>", containsDuplicate([3, 1]));
