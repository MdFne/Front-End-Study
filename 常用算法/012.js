/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let sym = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let res = '';
    let len = val.length;
    for (let i = 0; i < len; i++) {
        while (num >= val[i]) {
            res += sym[i];
            num -= val[i];
            // console.log(i);
        }
        if (num === 0) break;
    }
    return res;
};

console.log(intToRoman(3749));
