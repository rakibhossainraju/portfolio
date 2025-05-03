import React from "react";
import Dots from "../../components/Dots";

const Hero = ({ translation }) => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">{translation.title}</h1>
                <div className="hero__description">{translation.description}</div>
                <a className="button button__primary" href="#contacts">
                    {translation.button} =&gt;
                </a>
            </div>
            <div className="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" className="hero__logo" />
                <img src="/images/hero.png" alt="Elias" className="hero__image" />
                <div className="hero__status">{translation.status}</div>
                <Dots />
            </div>
        </section>
    );
};

export default Hero;