// External Dependencies
import React, { useState } from 'react';

// Components
import AccountSetting from './accountSetting';
import UserInfo from './userInfo';
import Tabs from './tabs';

// Utilities
import { TabsData } from '../../utility/Constants';

/**
 * Forms mapping
 * To select which form to render depending upon the selected tab
 */
const FormsMap = {
    1: AccountSetting,
    2: UserInfo,
};

/**
 * User component
 *
 * Contains Account setting and User information forms in tab view
 */
const User = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    const ActiveForm = FormsMap[selectedTab];
    return (
        <div>
            <Tabs
                tabsData={TabsData}
                handleTabClick={(selectedTab) => setSelectedTab(selectedTab)}
            />
            <ActiveForm />
        </div>
    );
};

export default User;
