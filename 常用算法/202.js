/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let ans = false;
    let s = String(n);
    let set = new Set();
    console.log(s);

    while (n !== 1) {
        s = String(n);
        let sum = 0;
        for (let i = 0; i < s.length; i++) {
            sum += Number(s[i]) ** 2;
        }
        if (set.has(sum)) {
            return false;
        }
        set.add(sum);
        n = sum;
    }
    return true;
};

console.log(isHappy(2));

/*
var isHappy = function (n) {
    const getNext = (num) => {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };
    
    let slow = n;
    let fast = getNext(n);
    
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    
    return fast === 1;
};
*/