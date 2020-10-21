/* External dependencies */
import React from 'react';

/* Components */
import MenuItem from './MenuItem';

import './style.scss';

/**
 * Sidebar component
 */
const Sidebar = () => {
    return (
        <div className="sidebar">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    );
};

export default Sidebar;
