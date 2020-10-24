/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Logo from '../../assets/images/logo.png';
import './style.scss';

/**
 * Header component
 */
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <div className="logo__container">
                    <img className="logo" src={Logo} />
                </div>
                <div className="hamburger__container">
                    <i className="fa fa-bars hamburger" aria-hidden="true" />
                </div>
            </div>
            <div className="header__right">
                <div className="icons">
                    <div className="icon__container">
                        <i
                            className="fa fa-globe icon lang__icon"
                            aria-hidden="true"
                        />
                        <span className="language">EN</span>
                    </div>
                    <div className="icon__container">
                        <i
                            className="fa fa-envelope-o icon"
                            aria-hidden="true"
                        />
                        <div className="dot" />
                    </div>
                    <div className="icon__container">
                        <i className="fa fa-bell-o icon" aria-hidden="true" />
                        <div className="dot" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
