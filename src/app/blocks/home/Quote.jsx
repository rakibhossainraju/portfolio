import React from "react";

const Quote = ({ t }) => {
    return (
        <figure className="quote">
            <blockquote className="quote__text">{t.text}</blockquote>
            <figcaption className="quote__author">{t.author}</figcaption>
        </figure>
    );
};

export default Quote;