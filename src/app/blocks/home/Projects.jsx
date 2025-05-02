import React from "react";
import ProjectList from "../../components/ProjectList";

const Projects = ({ t, t2 }) => {
    return (
        <section className="projects">
            <div className="projects__header">
                <h2 className="h2">{t.title}</h2>
                <a className="projects__link" href="/projects">
                    {t.button} ~~&gt;
                </a>
            </div>
            <ProjectList limit={3} t={t2} />
        </section>
    );
};

export default Projects;