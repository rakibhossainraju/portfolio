import React from "react";

export default({ translation }) => {
    console.log(translation)
    return (
        <section className="about">
            <div className="about__illustrations">
                <img src="/images/about-me.png" alt="" className="about__image" />
            </div>
            <div className="about__text">
                {translation.description.map((text, index) => (
                    <p className="about__description" key={index}>
                        {text}
                    </p>
                ))}
            </div>
        </section>
    );
};
