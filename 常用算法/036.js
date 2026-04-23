/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (row.has(board[i][j])) {
                    console.log(i, j);
                    return false;
                } else {
                    row.add(board[i][j]);
                }
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== '.') {
                if (row.has(board[j][i])) {
                    console.log(j, i);
                    return false;
                } else {
                    row.add(board[j][i]);
                }
            }
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let chunk = new Set();
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    if (board[i + k][j + l] !== '.') {
                        if (chunk.has(board[i + k][j + l])) {
                            console.log(i + k, j + l);
                            return false;
                        } else {
                            chunk.add(board[i + k][j + l]);
                        }
                    }
                }
            }
        }
    };
    return true;
}

console.log(isValidSudoku(board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));

console.log(isValidSudoku(board =
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
