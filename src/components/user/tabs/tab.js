// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tab component
 */
const Tab = ({ tab, handleTabClick }) => {
    const { name, value } = tab || {};

    return <div onClick={() => handleTabClick(value)}>{name}</div>;
};

export default Tab;

Tab.propTypes = {
    tab: PropTypes.exact({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
    handleTabClick: PropTypes.func.isRequired,
};
