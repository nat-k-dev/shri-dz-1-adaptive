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
    console.log('test f = ', invalidCommandsList.some(invalidCommand => cmd.startsWith(invalidCommand)));
    return invalidCommandsList.some(invalidCommand => cmd.startsWith(invalidCommand));
}

function getErrorData(e) {
    if (e === undefined) {
        return {
            status: 500,
            data: undefined
        }
    }
    return {
        status: (e.response && e.response.status) ? 
                            e.response.status 
                            : e.status ? e.status : 500,
        data: (e.response && e.response.data) ?
                        JSON.stringify(e.response.data)
                        : e.data ? e.data : e.message
    };
}

module.exports = {
    isStr,
    isNum,
    invalidBuildCommand,
    getErrorData
}