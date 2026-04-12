/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    let left = right = 0;
    let n = haystack.length;
    while (right < n) {
        if (haystack[right] === needle[right - left]) {
            while (right - left < needle.length) {
                if (haystack[right] !== needle[right - left]) {
                    console.log(left, right);
                    left = right - 1;
                    right--;
                    break;
                }
                right++;
            }
            if (right - left === needle.length) {
                return left;
            }
        } else {
            left++;
            right++;
        }
    }
    return -1;
};

console.log(strStr("babba", "bbb"));
