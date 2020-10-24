/* External dependencies */
import React from 'react';

/* Components */
import Header from '../header';
import Sidebar from '../sidebar';

import './style.scss';

/**
 * Layout component
 */
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="main__content">
                <div className="sidebar__container">
                    <Sidebar />
                </div>
                <div className="right__component">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
