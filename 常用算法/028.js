/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    let left = 0;
    let n = haystack.length;
    let m = needle.length;
    while (left < n) {
        if (haystack[left] === needle[0]) {
            let i = 0;
            for (i = 0; i < m; i++) {
                if (haystack[left + i] !== needle[i]) {
                    left += i;
                    // left--;
                    console.log(left);
                    break;
                }
            }
            if (i === m - 1) {
                return left;
            }
        } else {
            left++;
        }
    }
    return -1;
};

console.log(strStr("babba", "bbb"));
