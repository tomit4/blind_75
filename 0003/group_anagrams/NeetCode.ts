// O(m * n) m number of strings, n average length of strings
const groupAnagrams = (strs: string[]): string[][] => {
  const res = {}; // mapping charCount to list of Anagrams

  for (let i = 0; i < strs.length; i++) {
    const s = strs[i];
    const count = Array(26).fill(0); // a ... z

    for (let c = 0; c < s.length; c++) {
      const aCode = "a".codePointAt(0)!;
      const sCode = s.codePointAt(c)!;
      const charDiff = sCode - aCode;
      count[charDiff] += 1;
    }
    const hash = count.join("");
    if (res[hash] === undefined) {
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
