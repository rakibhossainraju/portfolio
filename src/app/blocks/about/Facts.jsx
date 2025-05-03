import React from "react";

export default ({ facts }) => {
    return (
        <section className="facts">
            <h2 className="h2">{facts.title}</h2>
            <div className="facts__content">
                <ul className="facts__list">
                    {facts.list.map((fact, index) => (
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
