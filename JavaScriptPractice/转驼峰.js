function toCamel(str) {
    return str.replace(/[-_\s]+(.)?/g, (_, char) =>
        char ? char.toUpperCase() : ''
    )
}

console.log(toCamel('ad_dadwwwwwwc_cihe'));
