import React from "react";
import skills from "../../consts/skills";
import SkillBlock from "../../components/SkillBlock.js";

export default ({ t, t2 }) => {
    return (
        <section className="skills">
            <h2 className="h2">{t.title}</h2>
            <div className="skills__content">
                {Object.keys(skills).map((id) => (
                    <SkillBlock id={id} key={id} {...t2} />
                ))}
            </div>
        </section>
    );
};
