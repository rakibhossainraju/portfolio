import React from "react";
import projects from "../consts/projects";
import websites from "../consts/websites";
import techs from "../consts/techs";
import media from "../consts/media";

const mapLinks = (links) => {
    return Object.keys(links).map((link) => {
        let href =
            "https://" + (link === "live" ? "" : websites[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`;
        if (link === "github" && links[link].startsWith("/")) href = media.github + links[link];

        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return (
            <a href={href} className={`button ${className}`} key={link}>
                {name} =&gt;
            </a>
        );
    });
};

const Project = ({ id, t }) => {
    const { hasImage, techs: projectTech, links } = projects.find(
        (project) => project.id === id
    );

    return (
        <div className="project">
            {hasImage && (
                <img
                    src={`/images/projects/${id}.webp`}
                    alt={t[id].name}
                    className="project__image"
                />
            )}

            <ul className="project__techs">
                {projectTech.map((tech) => (
                    <li className="project__tech" key={tech}>
                        {techs[tech]}
                    </li>
                ))}
            </ul>

            <div className="project__content">
                <div className="project__name">{t[id].name}</div>
                <div className="project__description">{t[id].description}</div>
                <div className="project__links">{mapLinks(links)}</div>
            </div>
        </div>
    );
};

export default Project;