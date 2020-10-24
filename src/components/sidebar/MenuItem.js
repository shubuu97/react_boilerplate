import React from 'react';
import './style.scss';

const MenuItem = () => {
    return (
        <div className="menu-item__container">
            <div className="icon__container">
                <i className="fa fa-home icon" area-hidden="true" />
            </div>
            <div className="item">Menu Item</div>
        </div>
    );
};

export default MenuItem;
