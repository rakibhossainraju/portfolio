import React from "react";
import Hero from "../blocks/home/Hero";
import Quote from "../blocks/home/Quote";
import Projects from "../blocks/home/Projects";
import Skills from "../blocks/home/Skills";
import About from "../blocks/home/About";
import Contacts from "../blocks/home/Contacts";
import "../../styles/pages/home.sass";


const HomePage = ({ pageTranslations, localeData }) => {
    return (
        <>
            <Hero translation={pageTranslations.hero} />
            <Quote translation={pageTranslations.quote} />
            <Projects translation={pageTranslations.projects} t2={localeData.projects} />
            <Skills translation={pageTranslations.skills} t2={localeData.skills} />
            <About translation={pageTranslations.about} />
            <Contacts translation={pageTranslations.contacts} />
        </>
    );
};

export default HomePage;