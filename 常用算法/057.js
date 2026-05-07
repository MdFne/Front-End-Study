/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = [];
    let left = newInterval[0];
    let right = newInterval[1];
    let flag = false;
    for (let interval of intervals) {
        if (interval[1] < left) {
            res.push(interval);
        } else if (interval[0] > right) {
            if (!flag) res.push([left, right]);
            flag = true;
            res.push(interval);
        } else {
            left = Math.min(left, interval[0]);
            right = Math.max(right, interval[1]);
        }
    }
    if (!flag) res.push([left, right]);
    return res;
};

console.log(insert(intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]));
