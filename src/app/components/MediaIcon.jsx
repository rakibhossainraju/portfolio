import React from "react";
import media from "../consts/media";

const MediaIcon = ({ iconType }) => {
    return (
        <a href={media[iconType]} className="media">
            <img src={`/images/icons/${iconType}.svg`} alt={iconType} className="media__icon"/>
        </a>
    );
};

export default MediaIcon;
