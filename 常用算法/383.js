/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let map = new Map();
    let n = magazine.length, m = ransomNote.length;
    for (let i = 0; i < n; i++) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
    }
    for (let i = 0; i < m; i++) {
        if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
            return false;
        }
        map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    }
    return true;
};

console.log(canConstruct("aa", "aab"));
console.log(canConstruct(ransomNote = "a", magazine = "b"));

