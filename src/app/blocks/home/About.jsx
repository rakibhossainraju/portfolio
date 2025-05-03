import React from "react";

const About = ({ translation }) => {
    return (
        <section className="about">
            <div className="about__content">
                <h2 className="h2">{translation.title}</h2>
                <div className="about__text">
                    {translation.description.map((text, index) => (
                        <p className="about__description" key={index}>
                            {text}
                        </p>
                    ))}
                </div>

                <a href="/about-me" className="button">{translation.button} -&gt;</a>
            </div>
            <img src="/images/about-me.png" alt="" className="about__image" />
        </section>
    );
};

export default About;
