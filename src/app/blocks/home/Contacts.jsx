import React from "react";
import media from "../../consts/media.js";

const contacts = [
    {
        name: "discord",
        text: media.discordTag,
    },
    {
        name: "email",
        text: media.emailRaw,
    }
];

const Contacts = ({ translation }) => {
    return (
        <section className="contacts" id="contacts">
            <h2 className="h2">{translation.title}</h2>
            <div className="contacts__content">
                <p className="contacts__description">{translation.text}</p>
                <div className="contacts__media">
                    <h3 className="contacts__title">{translation.media}</h3>
                    <div className="contacts__list">
                        {contacts.map((contact) => (
                            <a className="contact" href={media[contact.name]} key={contact.name}>
                                <img src={`/images/icons/${contact.name}.svg`} alt="" />
                                <div className="contact__name">{contact.text}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;