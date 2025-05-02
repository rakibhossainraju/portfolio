import React from "react";
import MediaIcon from "./MediaIcon";
import media from "../consts/media.js";

const Footer = ({ t }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__info">
                        <div className="footer__header">
                            <div className="logo">
                                <img src="/images/logo.svg" alt="logo" className="logo__img" />
                                <div className="logo__name">Elias</div>
                            </div>
                            <a className="footer__email" href={media.email}>
                                {media.emailRaw}
                            </a>
                        </div>
                        <p className="footer__description">{t.description}</p>
                    </div>
                    <div className="footer__media">
                        <div className="footer__title">{t.media}</div>
                        <div className="footer__list">
                            {["figma", "github", "discord"].map((name) => (
                                <MediaIcon name={name} key={name} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">© {t.copyright}</div>
            </div>
        </footer>
    );
};

export default Footer;