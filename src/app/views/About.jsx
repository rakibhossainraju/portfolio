import React from "react";
import Path from "../components/Path";
import AboutBlock from "../blocks/about/About";
import Skills from "../blocks/about/Skills";
import Facts from "../blocks/about/Facts";

import "../../styles/pages/about.sass";

export default ({ t, locale }) => {
    return (
        <>
            <Path description={t.description} />
            <AboutBlock {...t.about} />
            <Skills skills={t.skills} localeSkills={locale.skills} />
            <Facts {...t.facts} />
        </>
    );
};