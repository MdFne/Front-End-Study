/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let m = pattern.length, n = s.split(' ').length;
    if (m !== n) {
        return false;
    }
    let array_s = s.split(' ');
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < m; i++) {
        if (!map1.has(pattern[i])) {
            map1.set(pattern[i], array_s[i]);
        } else if (map1.get(pattern[i]) !== array_s[i]) {
            return false;
        }
        if (!map2.has(array_s[i])) {
            map2.set(array_s[i], pattern[i]);
        } else if (map2.get(array_s[i]) !== pattern[i]) {
            return false;
        }
    }
    return true;
};