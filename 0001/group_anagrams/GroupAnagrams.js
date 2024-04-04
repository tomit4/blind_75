const groupAnagrams = (strs) => {
    let charMap = {};
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort().join("");
        if (!charMap[key]) {
            charMap[key] = [strs[i]];
        }
        else {
            charMap[key].push(strs[i]);
        }
    }
    const result = Object.values(charMap);
    return result;
};
let strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("groupAnagrams(strings) :=>", groupAnagrams(strings));
strings = [""];
console.log("groupAnagrams(strings) :=>", groupAnagrams(strings));
strings = ["a"];
console.log("groupAnagrams(strings) :=>", groupAnagrams(strings));
