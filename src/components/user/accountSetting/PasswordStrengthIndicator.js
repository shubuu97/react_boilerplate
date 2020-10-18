// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Utilities
import { getPasswordStrengthText } from '../../../utility/CommonFunctions';

/**
 * Password strength indicator component
 */
const PasswordStrengthIndicator = ({ password }) => {
    const value = password?.value ?? '';

    return <div>{getPasswordStrengthText(value)}</div>;
};

export default PasswordStrengthIndicator;

PasswordStrengthIndicator.propTypes = {
    password: PropTypes.shape({
        value: PropTypes.string.isRequired,
    }),
};
