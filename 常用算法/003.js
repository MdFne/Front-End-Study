/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    let left = 0, right = 0;
    let max = 0;
    let set = new Set();
    set.add(s[left]);
    while (right < s.length - 1) {
        right++;
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        console.log(left, right, max);
        max = Math.max(max, right - left + 1);
    }
    return max === 0 ? 1 : max;
};

console.log(lengthOfLongestSubstring(s = "abcabcbb"));
console.log(lengthOfLongestSubstring(s = "bbbbb"));
console.log(lengthOfLongestSubstring(s = "pwwkew"));
