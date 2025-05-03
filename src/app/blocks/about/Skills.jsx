import React from "react";
import skills from "../../consts/skills";
import SkillBlock from "../../components/SkillBlock.jsx";

export default ({ translation, t2 }) => {
    return (
        <section className="skills">
            <h2 className="h2">{translation.title}</h2>
            <div className="skills__content">
                {Object.keys(skills).map((id) => (
                    <SkillBlock id={id} key={id} t={t2} />
                ))}
            </div>
        </section>
    );
};
