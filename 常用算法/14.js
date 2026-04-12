/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let maxPrefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] === undefined) {
                return maxPrefix;
            } else if (strs[j][i] !== char) {
                return maxPrefix;
            }
        }
        maxPrefix += char;
    }
    return maxPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
