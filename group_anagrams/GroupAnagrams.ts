// nicely done, took you too long, but you figured it out
// beats 77.39%
const groupAnagrams = (strs: string[]): string[][] => {
  const charMap = {};
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");
    if (!charMap[key]) {
      charMap[key] = [strs[i]];
    } else {
      charMap[key].push(strs[i]);
    }
  }
  const result: string[][] = Object.values(charMap);
  return result;
};

let strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("groupAnagrams(strings) :=>", groupAnagrams(strings));

strings = [""];
console.log("groupAnagrams(strings) :=>", groupAnagrams(strings));

strings = ["a"];
console.log("groupAnagrams(strings) :=>", groupAnagrams(strings));
