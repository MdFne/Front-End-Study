var threeSum = function (nums) {
    let res = new Set();
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        let target = -nums[i];

        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum === target) {
                // ✅ 改成字符串存入 Set
                res.add([nums[i], nums[left], nums[right]].join(','));
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    // ✅ 转回数组
    return [...res].map(str => str.split(',').map(Number));
};