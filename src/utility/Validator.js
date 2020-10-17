import {
    isEmail,
    isEmpty,
    hasMinLength,
    hasMaxLength,
    isStrongPassword,
} from './CommonFunctions';
/**
 *
 * @param {String} value - input value
 * @param {Object} rules - an object that contains properties similar to the cases (eg: isEmail)
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
            case 'isPassword':
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
