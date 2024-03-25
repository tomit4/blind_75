// DID NOT SOLVE 03/25/2024

// because of duplicate values this method will not work
const maxArea = (height: number[]): number => {
  const maxHeight = Math.max(...height);
  const indexOfMaxHeight = height.indexOf(maxHeight);
  // console.log("maxHeight :=>", maxHeight);
  // console.log("indexOfMaxHeight :=>", indexOfMaxHeight);
  height.splice(indexOfMaxHeight, 1);
  console.log("height :=>", height);
  const secondMaxHeight = Math.max(...height);
  console.log("secondMaxHeight :=>", secondMaxHeight);
  return 0;
};

let h = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`maxArea([${h}]) :=>`, maxArea(h));
