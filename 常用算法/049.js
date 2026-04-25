/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let copy = [...strs];
    for (let i = 0; i < copy.length; i++) {
        copy[i] = copy[i].split('').sort().join('');
    }
    let map = new Map();
    for (let i = 0; i < copy.length; i++) {
        if (!map.has(copy[i])) {
            map.set(copy[i], [strs[i]]);
        } else {
            map.set(copy[i], [...map.get(copy[i]), strs[i]]);
        }
    }
    let res = [];
    for (let key of map.keys()) {
        res.push(map.get(key));
    }
    return res;
};