/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let n = numbers.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(numbers[i])) {
            map[numbers[i]]++;
        } else {
            map[numbers[i]] = i;
        }
    }
    // console.log(map);
    for (let i = 0; i < n; i++) {
        // console.log(target - numbers[i], numbers[i]);
        if (map[target - numbers[i]]) {
            return [i + 1, map[target - numbers[i]] + 1];
        }
    }
    return [];
};

console.log(twoSum(numbers = [2, 7, 11, 15], target = 9));
