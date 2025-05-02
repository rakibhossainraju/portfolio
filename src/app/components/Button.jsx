import React from "react";

const Button = ({ type, text, link }) => {
    return (
        <a className={`button ${type}`} href={link}>
            {text}
        </a>
    );
};

export default Button;