function extractNum(str) {
    return str.match(/\d+/g) || []
}

console.log(extractNum('asdaa231g18416811dqqq'));
console.log(extractNum('adauHDisau'));

