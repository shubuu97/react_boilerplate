// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Tab from './Tab';

// Utilities
import { isValidArray } from '../../../utility/CommonFunctions';

/**
 * Tabs component
 */
const Tabs = ({ tabsData, handleTabClick }) => {
    if (!isValidArray(tabsData)) {
        return null;
    }

    return tabsData.map((tab) => {
        const { value } = tab || {};

        return <Tab key={value} tab={tab} handleTabClick={handleTabClick} />;
    });
};

export default Tabs;

Tabs.propTypes = {
    tabsData: PropTypes.array.isRequired,
    handleTabClick: PropTypes.func.isRequired,
};
