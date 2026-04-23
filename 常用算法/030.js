/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const res = [];
    // m: words数组长度, n: 单个单词长度, ls: 字符串s的长度
    const m = words.length, n = words[0].length, ls = s.length;

    // 从每个可能的起始位置开始（0到n-1），确保覆盖所有可能的子串起始位置
    for (let i = 0; i < n; i++) {
        // 如果起始位置加上所有单词的总长度超过字符串长度，直接break
        if (i + m * n > ls) {
            break;
        }

        // differ映射：记录窗口中单词与目标单词的差异
        // 正数表示窗口中该单词数量超过目标，负数表示不足
        const differ = new Map();

        // 构建初始窗口：从起始位置i开始，包含m个单词
        for (let j = 0; j < m; j++) {
            const word = s.substring(i + j * n, i + (j + 1) * n);
            differ.set(word, (differ.get(word) || 0) + 1);
        }

        // 减去目标单词的数量，得到差异
        for (const word of words) {
            differ.set(word, (differ.get(word) || 0) - 1);
            // 如果差异为0，从映射中删除该单词
            if (differ.get(word) === 0) {
                differ.delete(word);
            }
        }

        // 滑动窗口：每次移动一个单词长度
        for (let start = i; start < ls - m * n + 1; start += n) {
            if (start !== i) {
                // 移除左边界的单词（窗口左移，需要减去该单词）
                let word = s.substring(start - n, start);
                differ.set(word, (differ.get(word) || 0) - 1);
                if (differ.get(word) === 0) {
                    differ.delete(word);
                }

                // 加入右边界的新单词（窗口右移，需要加上该单词）
                word = s.substring(start + (m - 1) * n, start + m * n);
                differ.set(word, (differ.get(word) || 0) + 1);
                if (differ.get(word) === 0) {
                    differ.delete(word);
                }
            }

            // 如果differ映射为空，说明窗口中的单词与目标完全匹配
            if (differ.size === 0) {
                res.push(start);
            }
        }
    }
    return res;
};


// 测试用例
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // 预期输出: [0, 9]
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // 预期输出: [6, 9, 12]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])); // 预期输出: [8]
