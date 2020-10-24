// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Utilities
import { isValidArray } from '../../utility/CommonFunctions';

/**
 * Select options component
 */
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

    // Add placeholder as first item
    optionsToRender = [
        <option value="" key="placeholder">
            {placeholder}
        </option>,
        ...optionsToRender,
    ];

    return optionsToRender;
};

export default SelectOptions;

SelectOptions.propTypes = {
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
};
