/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let res = '';
    if (numRows === 1) return s;
    for (let i = 0; i < numRows; i++) {
        let j = i;
        if (j === 0 || j === numRows - 1) {
            while (j < s.length) {
                console.log(s[j]);
                res += s[j];
                j += 2 * (numRows - 1);
            }
        } else {
            while (j < s.length) {
                res += s[j];
                j += 2 * (numRows - 1) - 2 * i;
                if (j >= s.length) break;
                res += s[j];
                j += 2 * i;
            }
        }
    }
    return res;
};

/* var convert = function(s, numRows) {
    const n = s.length, r = numRows;
    if (r === 1 || r >= n) {
        return s;
    }
    const t = r * 2 - 2;
    const ans = [];
    for (let i = 0; i < r; i++) { // 枚举矩阵的行
        for (let j = 0; j < n - i; j += t) { // 枚举每个周期的起始下标
            ans.push(s[j + i]); // 当前周期的第一个字符
            if (0 < i && i < r - 1 && j + t - i < n) {
                ans.push(s[j + t - i]); // 当前周期的第二个字符
            }
        }
    }
    return ans.join('');
};
 */


console.log(convert("A", 1));