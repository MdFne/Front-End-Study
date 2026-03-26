function replaceSpaces1(str) {
    return str.replace(/ /g, '_')
}

function replaceSpaces2(str) {
    return str.split(' ').join('_')
}

let s = 'sdao adadaa da waer fadas s sasdad'

console.log(replaceSpaces1(s));
console.log(replaceSpaces2(s));
