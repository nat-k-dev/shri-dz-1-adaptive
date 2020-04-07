import React from 'react';
import classnames from 'classnames';
import Commit from './../Commit/Commit';
import TimeInfo from './../TimeInfo/TimeInfo';
import './BuildCard.scss';
import './../BuildDetails/BuildDetails.scss';
import './../BuildStatuses/BuildStatuses.scss';


export default function BuildCard({keyProp, buildId, buildCaption, branchName, commitHash, authorName, date, time, duration, needAction}) {
    const buildCardClass = classnames({
        'BuildCard': true,
        'Build-Item': true, 
        'Build_status_success': true,
        'Build-Item_action_no': !needAction
    });
    return (
        <li className={buildCardClass} key={keyProp}>
            <div className="Build-Icon"></div>
            <div className="Build-Details Build-Details_align_compact">
                <div className="Build-Info">
                    <div className="Build-Title">
                        <div className="Build-Id font_size_xl">{buildId}</div>
                        <div className="Build-Caption font_size_m">{buildCaption}</div>
                    </div>
                    <Commit branchName={branchName} commitHash={commitHash} authorName={authorName} />
                    
                </div>
                <TimeInfo date={date} time={time} duration={duration} />
            </div>
        </li>
    );
}