const monthMap = {
    0: 'янв',
    1: 'фев',
    2: 'мар',
    3: 'апр',
    4: 'мая',
    5: 'июн',
    6: 'июл',
    7: 'авг',
    8: 'сен',
    9: 'окт',
    10: 'ноя',
    11: 'дек'
}

function convertDateTime(str) {
    const d = new Date(str);
    return {
        time: d.getHours() + ':' + d.getMinutes(),
        date: d.getDate() + ' ' + monthMap[d.getMonth()]
    }
}

function msToTime(duration) {
    //const milliseconds = parseInt((duration%1000)/100)
    //const seconds = parseInt((duration/1000)%60);
    let minutes = parseInt((duration/(1000*60))%60);
    let hours = parseInt((duration/(1000*60*60))%24);

    return hours + ' ч ' + minutes + ' мин';
}

function convertDuration(nmb) {
    return msToTime(nmb);
}

module.exports = {
    convertDateTime,
    convertDuration
}