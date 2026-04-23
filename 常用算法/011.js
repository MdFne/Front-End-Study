/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let maxRight = maxLeft = 0;
    for (let i = 0; i < height.length; i++) {
        let j = i + 1;
        if (height[i] <= height[maxLeft]) {
            j = maxRight + 1;
        }
        for (j; j < height.length; j++) {
            if (max < Math.min(height[i], height[j]) * (j - i)) {
                maxRight = j;
                maxLeft = i;
                max = Math.min(height[i], height[j]) * (j - i);
                console.log(max, i, j);
            }
        }
    }
    return max;
};

console.log(maxArea([1, 2, 4, 3]));
