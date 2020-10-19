// Utilities
import validator from '../../Validator';
import {
    MAP_STATE_WITH_STORE,
    INPUT_CHANGE,
    CONFIRM_PASSWORD_INPUT_CHANGE,
    PASSWORD_INPUT_CHANGE,
} from '../actionTypes';

/**
 * Form field reducer
 *
 * @param {Object} state Form state
 * @param {Object} action Action object with name, value and type
 *
 * @returns {Object} Updated state object
 */

const FormReducer = (state = {}, action) => {
    const { name, value, type, updatedFormState } = action || {};

    const fieldData = name in state ? state[name] : {};
    const { validationRules } = fieldData || {};

    switch (type) {
        case MAP_STATE_WITH_STORE:
            return { ...updatedFormState };
        case INPUT_CHANGE:
            return {
                ...state,
                [name]: {
                    ...fieldData,
                    value,
                    touched: true,
                    valid: validator(value, validationRules),
                },
            };

        case PASSWORD_INPUT_CHANGE:
            const confirmPasswordObj = state?.confirmPassword ?? {};
            const confirmPasswordValue = confirmPasswordObj?.value ?? '';
            const isConfirmPasswordValid = confirmPasswordValue === value;

            return {
                ...state,
                [name]: {
                    ...fieldData,
                    value,
                    touched: true,
                    valid: validator(value, validationRules),
                },
                confirmPassword: {
                    ...confirmPasswordObj,
                    valid: isConfirmPasswordValid,
                },
            };

        case CONFIRM_PASSWORD_INPUT_CHANGE:
            const password = state?.password?.value ?? '';

            return {
                ...state,
                [name]: {
                    ...fieldData,
                    value,
                    touched: true,
                    valid: value === password,
                },
            };

        default:
            return state;
    }
};

export default FormReducer;
