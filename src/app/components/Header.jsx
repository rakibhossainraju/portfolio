import React from "react";
import routes from "../consts/routes";
import MediaIcon from "./MediaIcon";

const Header = ({ t }) => {
    const paths = ["/", "/projects", "/about-me"];

    return (
        <header className="header">
            <input className="hamburger" type="checkbox" aria-label="Menu" />

            <div className="media-header">
                <span className="media-header__line"></span>
                <div className="media-header__links">
                    {["discord", "github", "email"].map((name) => (
                        <MediaIcon name={name} key={name} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="header__inner">
                    <a className="logo" href="/">
                        <img className="logo__img" src="/images/logo.svg" alt="Elias logo" />
                        <span className="logo__name">Elias</span>
                    </a>
                    <div className="header__links">
                        {paths.map((path) => (
                            <a
                                href={path}
                                className={`header__link ${
                                    window.location.pathname === path ? "header__link_active" : ""
                                }`}
                                key={path}
                            >
                                {t[routes[path].name]}
                            </a>
                        ))}
                    </div>
                    <div className="dropdown">
                        <span className="dropdown__label">en</span>
                        <div className="dropdown__list">
                            <div className="dropdown__option">ru</div>
                            <div className="dropdown__option">ua</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;