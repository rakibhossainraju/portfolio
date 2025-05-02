import React from "react";

export default ({ t }) => {
    return (
        <section className="facts">
            <h2 className="h2">{t.title}</h2>
            <div className="facts__content">
                <ul className="facts__list">
                    {t.list.map((fact, index) => (
                        <li className="fact" key={index}>
                            {fact}
                        </li>
                    ))}
                </ul>
                <div className="facts__illustrations"></div>
            </div>
        </section>
    );
};
