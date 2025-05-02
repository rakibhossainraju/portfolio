import React from "react";
import Dots from "../../components/Dots";

const Hero = ({ t }) => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">{t.title}</h1>
                <div className="hero__description">{t.description}</div>
                <a className="button button__primary" href="#contacts">
                    {t.button} =&gt;
                </a>
            </div>
            <div className="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" className="hero__logo" />
                <img src="/images/hero.png" alt="Elias" className="hero__image" />
                <div className="hero__status">{t.status}</div>
                <Dots />
            </div>
        </section>
    );
};

export default Hero;