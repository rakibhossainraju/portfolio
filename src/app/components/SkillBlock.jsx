import React from "react";
import skills from "../consts/skills.js";
import techs from "../consts/techs.js";

export default ({ id, t }) => {
    return (
        <div className="skill-block">
            <div className="skill-block__name">{t[id]}</div>
            <ul className="skill-block__list">
                {skills[id].map((techIndex) => (
                    <li className="skill-block__skill" key={techIndex}>
                        {techs[techIndex]}
                    </li>
                ))}
            </ul>
        </div>
    );
};
