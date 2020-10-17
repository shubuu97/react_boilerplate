import {
    EmailRegex,
    UpperCaseRegex,
    LowerCaseRegex,
    NumberRegex,
    SpecialCharRegex,
} from './Regex';
import { PasswordStrengthText } from './constants';

export const isEmpty = (value) => {
    return value.trim().length > 0;
};

export const isEmail = (value) => {
    return EmailRegex.test(value);
};

export const hasMinLength = (value, minLength) => {
    return value.length >= minLength;
};

export const hasMaxLength = (value, maxLength) => {
    return value.length <= maxLength;
};

export const hasUpperCaseLetters = (value) => {
    return UpperCaseRegex.test(value);
};

export const hasLowerCaseLetters = (value) => {
    return LowerCaseRegex.test(value);
};

export const hasNumbers = (value) => {
    return NumberRegex.test(value);
};

export const hasSpecialChars = (value) => {
    return SpecialCharRegex.test(value);
};

export const getPasswordStrength = (value) => {
    // let passwordTypes = {
    let uppercase = UpperCaseRegex.test(value);
    let lowercase = LowerCaseRegex.test(value);
    let number = NumberRegex.test(value);
    let specialChar = SpecialCharRegex.test(value);
    // };

    let strength =
        (uppercase ? 1 : 0) +
        (lowercase ? 1 : 0) +
        (number ? 1 : 0) +
        (specialChar ? 1 : 0);

    // for (let type in passwordTypes) {
    //     if (passwordTypes[type]) strength++;
    // }
    return strength;
};

export const getPasswordStrengthText = (value) => {
    const strength = isStrongPassword(value);
    if (strength in PasswordStrengthText) {
        return PasswordStrengthText[strength];
    }
    return '';
};

export const isStrongPassword = (value) => {
    const strength = getPasswordStrength(value);
    if (strength === 4) {
        return true;
    }
    return false;
};

export const isValidArray = (arr) => {
    if (arr && Array.isArray(arr) && (arr || []).length > 0) {
        return true;
    }
    return false;
};
