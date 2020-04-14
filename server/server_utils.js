function isStr(str) {
    return typeof str === "string";
}

function isNum(n) {
    return typeof n === "number";
}

function invalidBuildCommand(buildCommand) {
    const cmd = buildCommand.trim();
    const invalidCommandsList = [
        'rm',
        'unlink',
        'mv',
        'cp'
    ];
    return invalidCommandsList.some(invalidCommand => cmd.startsWith(invalidCommand));
}

module.exports = {
    isStr,
    isNum,
    invalidBuildCommand
}