import React from 'react';

const Tab = ({ tab, handleTabClick }) => {
    const { name, value } = tab;
    return <div onClick={() => handleTabClick(value)}>{name}</div>;
};

export default Tab;
