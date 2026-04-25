// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function (s, t) {
//     let m = s.length, n = t.length;
//     if (m !== n) {
//         return false;
//     }
//     let map1 = new Map();
//     let map2 = new Map();
//     for (let i = 0; i < m; i++) {
//         if (!map1.has(s[i])) {
//             map1.set(s[i], t[i]);
//         } else if (map1.get(s[i]) !== t[i]) {
//             return false;
//         }
//         if (!map2.has(t[i])) {
//             map2.set(t[i], s[i]);
//         } else if (map2.get(t[i]) !== s[i]) {
//             return false;
//         }
//     }
//     return true;
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let m = s.length, n = t.length;
    if (m !== n) {
        return false;
    }
    let map1 = {};
    let map2 = {};
    for (let i = 0; i < m; i++) {
        if (!map1.hasOwnProperty(s[i])) {
            map1[s[i]] = [i];
        } else {
            map1[s[i]].push(i);
        }
        if (!map2.hasOwnProperty(t[i])) {
            map2[t[i]] = [i];
        } else {
            map2[t[i]].push(i);
        }
    }
    for (let i = 0; i < m; i++) {
        if (!map1[s[i]].every((item, index) => item === map2[t[i]][index])) {
            return false;
        }
    }

    return true;
};