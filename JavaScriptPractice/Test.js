/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0
    let min = Infinity
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        let m = prices[i] - min
        if (m > 0) {
            res = Math.max(res, m)
        }
        console.log(prices[i] - min);
    }
    return res
};

console.log(maxProfit([]))