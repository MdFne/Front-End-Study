/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let boardCopy = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let live = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (x === 0 && y === 0) {
                        continue;
                    }
                    if (i + x >= 0 && i + x < board.length && j + y >= 0 && j + y < board[0].length) {
                        live += board[i + x][j + y];
                    }
                }
            }
            if (board[i][j] === 1) {
                // 活细胞规则
                boardCopy[i][j] = (live === 2 || live === 3) ? 1 : 0;
            } else {
                // 死细胞规则
                boardCopy[i][j] = live === 3 ? 1 : 0;
            }
            // console.log(boardCopy[i][j], live);
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = boardCopy[i][j];
        }
    }
};

let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
gameOfLife(board);
console.log(board);

/*
var gameOfLife = function (board) {
    const m = board.length;
    const n = board[0].length;
    // 拷贝原始棋盘作为参考
    let boardCopy = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let live = 0;
            // 遍历8个方向
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (x === 0 && y === 0) continue;
                    const ni = i + x;
                    const nj = j + y;
                    // 边界合法判断
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                        live += board[ni][nj];
                    }
                }
            }
            // 生存规则
            if (board[i][j] === 1) {
                boardCopy[i][j] = (live === 2 || live === 3) ? 1 : 0;
            } else {
                boardCopy[i][j] = live === 3 ? 1 : 0;
            }
        }
    }

    // 原地修改原数组（关键）
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = boardCopy[i][j];
        }
    }
};

// 测试用例
let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
gameOfLife(board);
console.log(board);
*/