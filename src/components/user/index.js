import React, { useState } from 'react';
import AccountSetting from './accountSetting';
import UserInfo from './userInfo';
import Tabs from './tabs';
import { TabsData } from '../../utility/constants';

const User = () => {
    const [tabValue, setTabValue] = useState(1);

    return (
        <div>
            <Tabs
                tabsData={TabsData}
                handleTabClick={(tabValue) => setTabValue(tabValue)}
            />
            {tabValue === 1 ? <AccountSetting /> : <UserInfo />}
        </div>
    );
};

export default User;
