import React from "react";
import Path from "../components/Path";
import AboutBlock from "../blocks/about/About";
import Skills from "../blocks/about/Skills";
import Facts from "../blocks/about/Facts";
import "../../styles/pages/about.sass";

const AboutPage = ({ pageTranslations, localeData }) => {
    console.log(localeData)
    return (
        <>
            <Path description={pageTranslations.description} />
            <AboutBlock translation={pageTranslations.about} />
            <Skills translation={pageTranslations.skills} t2={localeData.skills} />
            <Facts facts={pageTranslations.facts} />
        </>
    );
};

export default AboutPage;