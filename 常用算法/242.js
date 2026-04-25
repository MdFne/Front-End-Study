/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let m = s.length, n = t.length;
    if (m !== n) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < m; i++) {
        map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    }
    for (let i = 0; i < n; i++) {
        if (!map.has(t[i]) || map.get(t[i]) === 0) {
            return false;
        }
        map.set(t[i], map.get(t[i]) - 1);
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'));
