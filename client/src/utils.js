function convertDateTime(str) {
    return {
        time: '-',
        date: '-'
    }
}

function convertDuration(nmb) {
    return '0 ч 0 мин';
}

module.exports = {
    convertDateTime,
    convertDuration
}