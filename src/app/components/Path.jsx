import React from "react";

const Path = ({ description }) => {
    return (
        <div className="path">
            <h1 className="h1 path__name">{window.location.pathname.slice(1)}</h1>
            <p className="path__description">{description}</p>
        </div>
    );
};

export default Path;