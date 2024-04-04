const groupAnagrams = (strs: string[]): string[][] => {};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("groupAnagrams(strs) :=>", groupAnagrams(strs));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

strs = [""];
console.log("groupAnagrams(strs) :=>", groupAnagrams(strs));
// Output: [[""]]

strs = ["a"];
console.log("groupAnagrams(strs) :=>", groupAnagrams(strs));
// Output: [["a"]]
