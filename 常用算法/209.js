/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0, right = 0;
    let min = nums.length + 1;
    let sum = 0;
    while (left < nums.length) {
        if (sum >= target) {
            // 找到一个符合条件的子数组
            // console.log(sum, left, right);
            min = Math.min(min, right - left);
            left++;
            sum -= nums[left - 1];
        } else if (sum < target) {
            if (right === nums.length) break;
            right++;
            sum += nums[right - 1];
        }
    }
    return min === nums.length + 1 ? 0 : min;
};

console.log(minSubArrayLen(target = 15, nums = [1, 2, 3, 4, 5]));
