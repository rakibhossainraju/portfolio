import React from "react";
import Hero from "../blocks/home/Hero";
import Quote from "../blocks/home/Quote";
import Projects from "../blocks/home/Projects";
import Skills from "../blocks/home/Skills";
import About from "../blocks/home/About";
import Contacts from "../blocks/home/Contacts";

import "../../styles/pages/home.sass";

export default ({ t, locale }) => {
    return (
        <>
            <Hero t={t.hero} />
            <Quote t={t.quote} />
            <Projects t={t.projects} t2={locale.projects} />
            <Skills t={t.skills} t2={locale.skills} />
            <About t={t.about} />
            <Contacts t={t.contacts} />
        </>
    );
};
