/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let n = s.length;
    if (n === 0) return true;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        if (!s[left].match(/[a-zA-Z0-9]/)) {
            left++;
            continue;
        }
        if (!s[right].match(/[a-zA-Z0-9]/)) {
            right--;
            continue;
        }
        let l = s[left].toLowerCase();
        let r = s[right].toLowerCase();
        if (l !== r) {
            // console.log(l, r);
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
