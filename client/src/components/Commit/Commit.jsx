import React from 'react';
import './Commit.scss';

export default function Commit({ branchName, commitHash, authorName }) {
    return (
        <div className="Commit">
            <div className="Commit-Info Build-Items_align_horizontal">
                <i className="Icon_type_branch"></i>
                <div className="Commit-Branch">{branchName}</div>
                <div className="Commit-Hash Build_text_secondary">{commitHash}</div>
            </div>
            <div className="Commit-Author Build-Items_align_horizontal">
                <i className="Icon_type_author"></i>
                <div className="Commit-AuthorName">{authorName}</div>
            </div>
        </div>
    );
}