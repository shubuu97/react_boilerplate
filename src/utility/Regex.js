export const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gim;
export const UpperCaseRegex = /[A-Z]/;
export const LowerCaseRegex = /[a-z]/;
export const NumberRegex = /[0-9]/;
export const SpecialCharRegex = /[!@#$%^&*]/;

//! Remove this
export const StrongPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/gim;
