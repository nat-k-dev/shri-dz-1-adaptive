function isStr(str) {
    return typeof str === "string";
}

function isNum(n) {
    return typeof n === "number";
}

module.exports = {
    isStr,
    isNum
}