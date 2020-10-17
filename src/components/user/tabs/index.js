import React from 'react';
import Tab from './tab';
import { isValidArray } from '../../../utility/CommonFunctions';

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
