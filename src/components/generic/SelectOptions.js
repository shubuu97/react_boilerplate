import React from 'react';
import { isValidArray } from '../../utility/CommonFunctions';

const SelectOptions = ({ options, placeholder }) => {
    if (!isValidArray(options)) {
        return null;
    }

    let optionsToRender = options.map((option) => {
        const { value, label, code } = option || {};
        return (
            <option value={value} key={label + code}>
                {label}
            </option>
        );
    });

    optionsToRender = [
        <option value="" key="placeholder">
            {placeholder}
        </option>,
        ...optionsToRender,
    ];
    return optionsToRender;
};

export default SelectOptions;
