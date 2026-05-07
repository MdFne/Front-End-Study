/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let window = new Set();

    for (let i = 0; i < nums.length; i++) {
        // 如果当前元素已经在窗口中，说明存在重复
        if (window.has(nums[i])) {
            return true;
        }

        // 将当前元素加入窗口
        window.add(nums[i]);

        // 保持窗口大小不超过 k
        if (window.size > k) {
            window.delete(nums[i - k]);
        }
    }

    return false;
};


/* var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i);
        } else {
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
            map.set(nums[i], i);
        }
    }
    return false;
};
*/

console.log(containsNearbyDuplicate(nums = [1, 2, 3, 1, 2, 3], k = 2));
