// Very similar to your own solution, but uses more modern JS features
// like Map()
// they also interestingly use Array.prototype.concat() instead of push to merge an existing array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const groupAnagrams = (strs: string[]): string[][] => {
  const strsMap = new Map();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    const values = strsMap.get(sortedStr) || [];

    strsMap.set(sortedStr, values.concat(str));
  }

  const result: string[][] = [];
  for (const [_, value] of strsMap) {
    result.push(value);
  }
  return result;
};
