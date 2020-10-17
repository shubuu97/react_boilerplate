import React from 'react';

const SelectOptions = ({ options, placeholder }) => {
    if (!options || !Array.isArray(options) || !(options || []).length > 0) {
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
