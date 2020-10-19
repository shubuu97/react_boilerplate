// External dependencies
import React from 'react';

// Components
import FormField from '../components/generic/FormField';

// Regex
import {
    EmailRegex,
    UpperCaseRegex,
    LowerCaseRegex,
    NumberRegex,
    SpecialCharRegex,
} from './Regex';

// Utilities
import { INPUT_CHANGE } from './form/actionTypes';
import { PasswordStrengthText } from './Constants';

/**
 * @param {string}* value
 *
 * @returns {Boolean}
 */
export const isEmpty = (value) => {
    return value.trim().length > 0;
};

/**
 * @param {string}* value
 *
 * @returns {Boolean}
 */
export const isEmail = (value) => {
    return EmailRegex.test(value);
};

/**
 * @param {string}* value
 * @param {number}* minLength
 *
 * @returns {Boolean}
 */
export const hasMinLength = (value, minLength) => {
    return value.length >= minLength;
};

/**
 * @param {string}* value
 * @param {number}* maxLength
 *
 * @returns {Boolean}
 */
export const hasMaxLength = (value, maxLength) => {
    return value.length <= maxLength;
};

/**
 * @param {string}* value
 *
 * @returns {Boolean}
 */
export const hasUpperCaseLetters = (value) => {
    return UpperCaseRegex.test(value);
};

/**
 * @param {string}* value
 *
 * @returns {Boolean}
 */
export const hasLowerCaseLetters = (value) => {
    return LowerCaseRegex.test(value);
};

/**
 * @param {string}* value
 *
 * @returns {Boolean}
 */
export const hasNumbers = (value) => {
    return NumberRegex.test(value);
};

/**
 * @param {string}* value
 *
 * @returns {Boolean}
 */
export const hasSpecialChars = (value) => {
    return SpecialCharRegex.test(value);
};

/**
 * Calculates password strength
 *
 * @param {string}* value
 *
 * @returns {number} Password strength between 1 to 4
 */
export const getPasswordStrength = (value) => {
    let passwordTypes = {
        uppercase: hasUpperCaseLetters(value),
        lowercase: hasLowerCaseLetters(value),
        number: hasNumbers(value),
        specialChar: hasSpecialChars(value),
    };

    let strength = 0;

    for (let type in passwordTypes) {
        if (passwordTypes[type]) strength++;
    }

    return strength;
};

/**
 * @param {string}* value
 *
 * @returns {string} Password strength value to show, eg: Easy, Medium etc
 */
export const getPasswordStrengthText = (value) => {
    const strength = getPasswordStrength(value);

    if (strength in PasswordStrengthText) {
        return PasswordStrengthText[strength];
    }
    return '';
};

/**
 * Matches password strength with 4 to check if it is strong or not
 *
 * @param {string}* value
 *
 * @returns {Boolean}
 */
export const isStrongPassword = (value) => {
    const strength = getPasswordStrength(value);
    if (strength === 4) {
        return true;
    }
    return false;
};

/**
 * Checks if an array is valid or not
 *
 * @param {Array}* arr
 *
 * @returns {Boolean}
 */
export const isValidArray = (arr) => {
    if (arr && Array.isArray(arr) && (arr || []).length > 0) {
        return true;
    }
    return false;
};

/**
 * Renders form fields
 *
 * @param {Object}* formState Form state object
 * @param {func}* dispatch
 * @param {Array} formFieldsKeysArray Array of keys to render form fields in a particular order otherwise it will be shown in ascending order
 */
export const renderFormFields = (formState, dispatch, formFieldsKeysArray) => {
    if (!isValidArray(formFieldsKeysArray)) {
        formFieldsKeysArray = Object.keys(formState).sort();
    }

    return formFieldsKeysArray.map((formFieldKey) => {
        if (formFieldKey in formState) {
            const formFieldObj = formState[formFieldKey];

            // INPUT_CHANGE is the default action type. For different action type, add it in formState object with key actionType
            const actionType =
                'actionType' in formFieldObj
                    ? formFieldObj['actionType']
                    : INPUT_CHANGE;

            return (
                <FormField
                    {...formFieldObj}
                    key={formFieldKey}
                    handleChange={(event) => {
                        const { name, value } = event?.target ?? {};

                        dispatch({
                            type: actionType,
                            name,
                            value,
                        });
                    }}
                />
            );
        }

        return null;
    });
};

/**
 * Creates request body from form state
 *
 * @param {Object}* formState
 */
export const createReqBody = (formState) => {
    let reqBody = {};

    if (formState) {
        let formFields = Object.keys(formState);

        formFields.forEach((key) => {
            reqBody[key] = formState[key].value;
        });
    }

    return reqBody;
};

export const mapStateWithStore = (formState, data) => {
    let updatedFormState = {};

    for (let formField in formState) {
        updatedFormState = {
            ...updatedFormState,
            [formField]: {
                ...formState[formField],
                value: data[formField],
            },
        };
    }
    return updatedFormState;
};
