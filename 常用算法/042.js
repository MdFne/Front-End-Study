/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let len = height.length;
    if (len < 3) return 0;
    
    // 找到整个数组的最大值和对应的索引
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < len; i++) {
        if (height[i] > max) {
            max = height[i];
            maxIndex = i;
        }
    }

    console.log(maxIndex, max);

    function countWater(left, right, currentMax) {
        let water = 0;
        for (let i = left + 1; i < right; i++) {
            water += currentMax - height[i];
        }
        return water;
    }

    let water = 0;

    // 处理左侧部分：从最大值向左遍历
    if (maxIndex !== 0) {
        let cur = maxIndex;
        while (cur > 0) {
            // 找到当前区间的最大值及其索引
            let localMax = 0;
            let localMaxIndex = 0;
            for (let i = 0; i < cur; i++) {
                if (height[i] > localMax) {
                    localMax = height[i];
                    localMaxIndex = i;
                }
            }
            console.log(localMaxIndex, cur, localMax);
            // 计算当前区间的储水量
            water += countWater(localMaxIndex, cur, localMax);
            // 更新当前位置为左侧最大值的位置
            cur = localMaxIndex;
        }
    }

    // 处理右侧部分：从最大值向右遍历
    if (maxIndex !== len - 1) {
        let cur = maxIndex;
        while (cur < len - 1) {
            // 找到当前区间的最大值及其索引
            let localMax = 0;
            let localMaxIndex = len - 1;
            for (let i = cur + 1; i < len; i++) {
                if (height[i] > localMax) {
                    localMax = height[i];
                    localMaxIndex = i;
                }
            }
            console.log(cur, localMaxIndex, localMax);
            // 计算当前区间的储水量
            water += countWater(cur, localMaxIndex, localMax);
            // 更新当前位置为右侧最大值的位置
            cur = localMaxIndex;
        }
    }

    return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 应该输出 6
