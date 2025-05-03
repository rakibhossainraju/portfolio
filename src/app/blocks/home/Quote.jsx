import React from "react";

const Quote = ({ translation }) => {
    return (
        <figure className="quote">
            <blockquote className="quote__text">{translation.text}</blockquote>
            <figcaption className="quote__author">{translation.author}</figcaption>
        </figure>
    );
};

export default Quote;