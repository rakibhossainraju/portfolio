import React from "react";
import MediaIcon from "./MediaIcon";
import {Link} from "react-router-dom";

const Header = () => {
    const paths = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/projects',
            name: 'Projects'
        },
        {
            path: '/about',
            name: 'About-Me'
        }
    ];

    return (
        <header className="header">
            <input className="hamburger" type="checkbox" aria-label="Menu" />

            <div className="media-header">
                <span className="media-header__line"></span>
                <div className="media-header__links">
                    {["discord", "github", "email"].map((name) => (
                        <MediaIcon iconType={name} key={name} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="header__inner">
                    <Link className="logo" to="/">
                        <img className="logo__img" src="/images/logo.svg" alt="Elias logo" />
                        <span className="logo__name">Elias</span>
                    </Link>
                    <div className="header__links">
                        {paths.map(({path, name}) => (
                            <Link
                                to={path}
                                className={`header__link ${
                                    window.location.pathname === path ? "header__link_active" : ""
                                }`}
                                key={path}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                    {/*<div className="dropdown">*/}
                    {/*    <span className="dropdown__label">en</span>*/}
                    {/*    <div className="dropdown__list">*/}
                    {/*        <div className="dropdown__option">ru</div>*/}
                    {/*        <div className="dropdown__option">ua</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;