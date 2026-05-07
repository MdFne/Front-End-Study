/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function (points) {
//     let axis_x = [];
//     let res = 0;
//     for (let point of points) {
//         axis_x[point[0]] = point[1];
//         axis_x[point[1]] = -1
//     };
//     // let stack = [];
//     let ups = [];
//     let lastUp = 0;
//     // let up = false;
//     for (let i = 0; i < axis_x.length; i++) {
//         if (axis_x[i] >= 1) {
//             lastUp = i;
//             // up = true;
//             ups.push(axis_x[i]);
//             // stack.push(1);
//         } else if (axis_x[i] === -1) {
//             res++;
//             // up = false;
//             for (let up of ups) axis_x[up] = 0;
//             ups = [];
//             console.log(lastUp, i);

//             // stack.pop();
//         }
//     }
//     return res;
// };

var findMinArrowShots = function (points) {
    if (!points.length) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);
    let pos = points[0][1]
    let ans = 1;
    for (let balloon of points) {
        if (balloon[0] > pos) {
            pos = balloon[1];
            ans++;
        }
    }
    return ans;
};


console.log(findMinArrowShots(points = [[10, 16], [2, 8], [1, 6], [7, 12]]));
console.log(findMinArrowShots(points = [[1, 2], [3, 4], [5, 6], [7, 8]]));
console.log(findMinArrowShots(points = [[1, 2], [2, 3], [3, 4], [4, 5]]));
