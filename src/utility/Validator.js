// Utilities
import {
    isEmail,
    isEmpty,
    hasMinLength,
    hasMaxLength,
    isStrongPassword,
} from './CommonFunctions';

/**
 *
 * @param {String | number} value Input value
 * @param {Object} rules Validation rules
 */
const Validator = (value, rules) => {
    let isValid = true;

    for (let rule in rules) {
        switch (rule) {
            case 'required':
                isValid = isValid && isEmpty(value);
                break;
            case 'isEmail':
                isValid = isValid && isEmail(value);
                break;
            case 'isStrongPassword':
                isValid = isValid && isStrongPassword(value);
                break;
            case 'minLength':
                isValid = isValid && hasMinLength(value, rules[rule]);
                break;
            case 'maxLength':
                isValid = isValid && hasMaxLength(value, rules[rule]);
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
};

export default Validator;
