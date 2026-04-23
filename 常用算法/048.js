/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    let m = 0, curLen = n;;
    while (m < Math.floor(n / 2)) {
        let temp;
        for (let i = 0; i < curLen - 1; i++) {
            temp = matrix[m][m + i];
            matrix[m][m + i] = matrix[n - 1 - m - i][m];
            matrix[n - 1 - m - i][m] = matrix[n - 1 - m][n - 1 - m - i];
            matrix[n - 1 - m][n - 1 - m - i] = matrix[m + i][n - 1 - m];
            matrix[m + i][n - 1 - m] = temp;
        }
        m++;
        curLen -= 2;
    }
    return matrix;
};

console.log(rotate(matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate(matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));


// var rotate = function(matrix) {
//     const n = matrix.length;

//     // 1. 转置矩阵
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }

//     // 2. 每行反转
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
// };