/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = [];
    path = path.split('/');
    for (let item of path) {
        switch (item) {
            case '/':
                break;
            case '..':
                if (stack.length) stack.pop();
                break;
            case '.':
                break;
            case '':
                break;
            default:
                stack.push(item);

        }
    }
    return stack.length ? '/' + stack.join('/') : '/';
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));