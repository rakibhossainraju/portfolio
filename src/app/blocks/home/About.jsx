import React from "react";

const About = ({ t }) => {
    return (
        <section className="about">
            <div className="about__content">
                <h2 className="h2">{t.title}</h2>
                <div className="about__text">
                    {t.description.map((text, index) => (
                        <p className="about__description" key={index}>
                            {text}
                        </p>
                    ))}
                </div>

                <a href="/about-me" className="button">{t.button} -&gt;</a>
            </div>
            <img src="/images/about-me.png" alt="" className="about__image" />
        </section>
    );
};

export default About;
