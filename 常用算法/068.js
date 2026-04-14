/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let res = [];
    let remains = words.length;
    let next = 0;
    while (remains > 0) {
        let preLine = []
        let lineLen = -1;
        while (remains > 0 && lineLen + 1 + words[next].length <= maxWidth) {
            preLine.push(words[next]);
            lineLen += words[next].length + 1;
            next++;
            remains--;
        }
        let line = '';
        let spaceNum = maxWidth - lineLen;
        let spaceList = new Array(preLine.length - 1).fill(1);
        let i = 0;
        while (spaceNum > 0) {
            spaceList[i % (preLine.length - 1)]++;
            spaceNum--;
            i++;
        }
        for (let i = 0; i < preLine.length; i++) {
            line += preLine[i];
            if (i < preLine.length - 1) {
                for (let j = 0; j < spaceList[i]; j++) {
                    line += ' ';
                }
            }
            if (i === preLine.length - 1) {
                line += ' '.repeat(maxWidth - line.length);
            }
        }
        res.push(line);
    }
    res[res.length - 1] = res[res.length - 1].replace(/\s+/g, ' ');
    res[res.length - 1] += ' '.repeat(maxWidth - res[res.length - 1].length);
    return res;
};

console.log(fullJustify(words = ["This", "an", "example", "example", "of", "text", "justification."],
    maxWidth = 16));
