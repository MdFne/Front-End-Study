/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);

    let max = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let cur_num = num;
            let cur_max = 1;
            while (set.has(cur_num + 1)) {
                cur_num++;
                cur_max++;
            }
            max = Math.max(cur_max, max);
        }
    }
    return max;
}


/* var longestConsecutive = function (nums) {
    let sorted_nums = nums.sort((a, b) => a - b);
    let max = 0;
    let cur_max = 1;
    for (let i = 0; i < sorted_nums.length; i++) {
        if (sorted_nums[i] + 1 === sorted_nums[i + 1]) {
            cur_max++;
        } else if (sorted_nums[i] === sorted_nums[i + 1]) {
            continue;
        } else {
            max = Math.max(cur_max, max);
            cur_max = 1;
        }
    }
    return max;
}; */

console.log(longestConsecutive(nums = [1, 0, 1, 2]));
