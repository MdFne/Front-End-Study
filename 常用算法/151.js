/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim().split(/\s+/);
    s = s.reverse();
    return s.join(' ');
};

console.log(reverseWords("a good   example"));