/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let m = s.length, n = t.length;
    if (m < n) return "";
    let left = 0, right = 0;
    let minLen = m + 1;
    let minStr = "";
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) + 1);
        } else {
            map.set(t[i], 1);
        }
    }
    console.log(map);
    while (left <= right && right < m) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
        }
        while (left <= right && (!map.has(s[left]) || (map.has(s[left]) && map.get(s[left]) < 0))) {
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
            }
            left++;
        }
        console.log('Cur R & L: ' + right + ' ' + left);
        console.log(map);
        let flag = true;
        for (let key of map.keys()) {
            // console.log(key + ' ' + map.get(key));
            if (map.get(key) > 0) {
                flag = false;
                console.log('Not Enough Key: ' + key);
                break;
            }
        }
        if (flag) {
            if (right - left + 1 < minLen) {
                console.log('Min Len: ' + (right - left + 1));
                minStr = s.substring(left, right + 1);
                minLen = right - left + 1;
            }
        }
        right++;
    }
    return minStr;
};

// console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"));
console.log(minWindow(s = 'a', t = 'b'));

