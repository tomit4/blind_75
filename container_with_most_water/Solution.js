var maxArea = function (height) {
    if (!height.length)
        return 0;
    var i = 0;
    var j = height.length - 1;
    var sum = 0;
    while (i < j) {
        var total = Math.min(height[i], height[j]) * (j - 1);
        if (total > sum)
            sum = total;
        if (height[i] <= height[j])
            i++;
        else if (height[i] > height[j])
            j--;
    }
    return sum;
};
console.log("maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) :=>", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
// console.log("maxArea([1, 1]) :=>", maxArea([1, 1])); // 1
// fails
console.log("maxArea([1, 2, 1]) :=>", maxArea([1, 2, 1])); // expected 2, got 1
