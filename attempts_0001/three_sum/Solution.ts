const threeSum = (nums: number[]): number[][] => {
  nums = nums.sort((a, b) => a - b);

  const result: [number, number, number][] = [];

  for (const i of nums.keys()) {
    // skip duplicate i values. this speeds things up a lot.
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--; // sum too large? decrease it.
      else if (sum < 0) left++; // sum too small? increase it.
      else {
        // skip duplicate left and right values
        while (left < right && nums[right] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        result.push([nums[i], nums[left], nums[right]]);
        left++; // increment left to keep looking for more combinations.
      }
    }
  }
  return result;
};
