import React from "react";
import './tag.css'

const Tag = ({string}) => {
    return(
        <div className="tag-container">
            <div className="tag-wrapper">
                <div className="ellipse-4" />
                <div className="text-wrapper-8">{string}</div>
            </div>
        </div>
    );
}

export {Tag}