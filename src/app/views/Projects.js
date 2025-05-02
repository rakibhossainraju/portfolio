import React from "react";
import Path from "../components/Path";
import ProjectList from "../components/ProjectList";

import "src/styles/pages/projects.sass";

const ProjectsPage = ({ t, t2 }) => {
    return (
        <>
            <Path description={t.description} />
            <ProjectList
                title={t.decent}
                filter={(p) => !p.isSmall}
                projects={t2.projects}
            />
            <ProjectList
                title={t.small}
                filter={(p) => p.isSmall && !p.isInProgress}
                projects={t2.projects}
            />
        </>
    );
};

export default ProjectsPage;