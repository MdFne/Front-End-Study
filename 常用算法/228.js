/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) return [];
    let res = [String(nums[0])];
    let cur_set = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            continue;
        } else {
            if (nums[i - 1] - nums[i - 2] === 1) res[cur_set] += "->" + nums[i - 1];
            cur_set++;
            res.push(String(nums[i]));
        }
    }
    if (nums[nums.length - 1] - nums[nums.length - 2] === 1) res[cur_set] += "->" + nums[nums.length - 1];
    return res;
};

console.log(summaryRanges(nums = [0, 1, 2, 4, 5, 7]));
console.log(summaryRanges(nums = [0, 2, 3, 4, 6, 8, 9]));
