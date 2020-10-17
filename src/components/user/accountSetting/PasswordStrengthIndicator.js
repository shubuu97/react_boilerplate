import React from 'react';

import { getPasswordStrengthText } from '../../../utility/CommonFunctions';

const PasswordStrengthIndicator = (props) => {
    const value = props?.data?.value ?? '';
    return <div>{getPasswordStrengthText(value)}</div>;
};

export default PasswordStrengthIndicator;
