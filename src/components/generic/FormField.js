import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
    element,
    id,
    name,
    type = 'text',
    label,
    handleChange,
    onkeyDown,
    placeholder,
    touched,
    valid,
    value,
    options,
    disabled,
    errorMessage,
}) => {
    switch (element) {
        case 'input':
            return (
                <div>
                    <label htmlFor={name}>{label}</label>
                    <input
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => handleChange(e, id)}
                        onKeyDown={onkeyDown}
                        disabled={disabled || false}
                        // className={
                        //     !valid && touched
                        //         ? 'formField invalidField'
                        //         : disabled
                        //         ? 'disabledInput formField'
                        //         : 'formField'
                        // }
                        // style={{ ...styles }}
                    />
                    {!valid && touched ? (
                        <div className="error-msg my-1">
                            <span>{errorMessage}</span>
                        </div>
                    ) : null}
                </div>
            );
        default:
            return null;
    }
};

export default FormField;

FormField.propTypes = {
    element: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
};
