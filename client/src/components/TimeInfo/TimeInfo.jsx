import React from 'react';
import './TimeInfo.scss';
import './../Icon/Icon.scss';

export default function TimeInfo({date, time, duration}) {
    return (
        <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
            <div className="TimeInfo-DateTime TimeInfo_align_line">
                <i className="Icon_type_calendar"></i>
                <div className="TimeInfo-DateTime_breakLine_no">{date + ', ' + time}</div>
            </div>
            <div className="TimeInfo-Duration TimeInfo_align_line">
                <div className="Icon_type_clock"></div>
                <div>{duration}</div>
            </div>
        </div>
    );
}