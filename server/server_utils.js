function IsStr(str) {
    return typeof str === "string";
}

function IsNum(n) {
    return typeof n === "number";
}

module.exports = {
    IsStr,
    IsNum
}