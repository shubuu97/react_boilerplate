import validator from '../../Validator';
import { INPUT_CHANGE, CONFIRM_PASSWORD } from '../actionTypes';

/**
 * This reducer can be called onChange of input fields with type "INPUT CHANGE" and for emailPhone input, type will be "EMAIL_PHONE_CHANGE"
 * @param {Object} state - form state
 * @param {Object} action - action with type and payload
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
        case CONFIRM_PASSWORD:
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
