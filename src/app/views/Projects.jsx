import React from "react";
import Path from "../components/Path";
import ProjectList from "../components/ProjectList";
import "../../styles/pages/projects.sass";

const ProjectsPage = ({ pageTranslations, localeData}) => {
    return (
        <>
            <Path description={pageTranslations.description} />
            <ProjectList
                title={pageTranslations.decent}
                filter={(p) => !p.isSmall}
                projects={localeData.projects}
                t={localeData.projects}
            />
            <ProjectList
                title={pageTranslations.small}
                filter={(p) => p.isSmall && !p.isInProgress}
                projects={localeData.projects}
                t={localeData.projects}
            />
        </>
    );
};

export default ProjectsPage;