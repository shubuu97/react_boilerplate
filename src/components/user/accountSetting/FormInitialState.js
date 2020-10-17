const FormInitialState = {
    email: {
        element: 'input',
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'john@doe.com',
        touched: false,
        valid: false,
        value: '',
        validationRules: {
            isEmail: true,
        },
        errorMessage: 'Please enter a valid email!',
    },
    password: {
        element: 'input',
        id: 'password',
        name: 'password',
        type: 'text',
        label: 'Password',
        placeholder: 'Enter your password',
        touched: false,
        valid: false,
        value: '',
        validationRules: {
            isPassword: true,
        },
        errorMessage:
            'Password must include uppercase letters, lowercase letters, numbers and special characters!',
    },
    confirmPassword: {
        element: 'input',
        id: 'confirmPassword',
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Confirm your password',
        touched: false,
        valid: false,
        value: '',
        validationRules: {
            minLength: 6,
        },
        errorMessage: 'Password do not match!',
        doesMatch: false,
    },
};

export default FormInitialState;
