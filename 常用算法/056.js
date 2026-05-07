/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let sorted = intervals.sort((a, b) => a[0] - b[0]);
    console.log(sorted);
    let res = [];
    let cur = sorted[0];
    // let lastPush = false;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][0] <= cur[1]) {
            cur[1] = Math.max(cur[1], sorted[i][1]);
        } else {
            res.push(cur);
            cur = sorted[i];
            // if (i == sorted.length - 1) lastPush = true;
        }
        console.log(cur);
    }
    res.push(cur);
    return res;
};

console.log(merge(intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]));
