/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rowsToZero = [];
    let colsToZero = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowsToZero.push(i);
                colsToZero.push(j);
            }
        }
    }
    for (let r of rowsToZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[r][j] = 0;
        }
    }
    for (let c of colsToZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][c] = 0;
        }
    }
    return matrix;
};

console.log(setZeroes(matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));

/*
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = col[j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};
*/

/*
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
};
*/