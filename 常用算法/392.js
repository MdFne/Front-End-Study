/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let n = s.length;
    let m = t.length;
    if (n > m) return false;
    if (n === 0) return true;
    let i = j = 0;
    for (i = 0; i < m; i++) {
        // console.log(s[i], t[j]);
        if (s[j] === t[i]) {
            j++;
        }
        if (j === n) {
            return true;
        }
    }
    return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
