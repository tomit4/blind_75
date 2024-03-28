// NeetCode Spreadsheet Hint:
// for each of 26 chars, use count of each char in each word
// as tuple for key in dict, value is the list of anagrams;
const groupAnagrams = (strs) => {
    const res = {}; // mapping charCount to List of Anagrams
    for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        const count = Array(26).fill(0); // a ... z
        for (let j = 0; j < s.length; j++) {
            const aCode = "a".codePointAt(0);
            const sCode = s.codePointAt(j);
            const charDiff = sCode - aCode;
            count[charDiff] += 1;
        }
        const hash = count.join("");
        if (!res[hash]) {
            res[hash] = [];
        }
        res[hash].push(s);
    }
    return Object.values(res);
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("groupAnagrams(strs) :=>", groupAnagrams(strs));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
strs = [""];
console.log("groupAnagrams(strs) :=>", groupAnagrams(strs));
// Output: [[""]]
strs = ["a"];
console.log("groupAnagrams(strs) :=>", groupAnagrams(strs));
// Output: [["a"]]
