// Utilities
import validator from '../../Validator';
import { INPUT_CHANGE, CONFIRM_PASSWORD_INPUT_CHANGE } from '../actionTypes';

/**
 * Form field reducer
 *
 * @param {Object} state Form state
 * @param {Object} action Action object with name, value and type
 *
 * @returns {Object} Updated state object
 */

const FormFieldReducer = (state = {}, action) => {
    const { name, value, type } = action || {};

    const fieldData = name in state ? state[name] : {};
    const { validationRules } = fieldData || {};

    switch (type) {
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

export default FormFieldReducer;
