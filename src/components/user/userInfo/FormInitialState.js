import CountryList from '../../../utility/CountryList.json';

const FormInitialState = {
    firstName: {
        element: 'input',
        id: 'firstName',
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'First Name',
        touched: false,
        valid: false,
        value: '',
        validationRules: {
            minLength: 3,
        },
        errorMessage: 'Name must be 3 characters long!',
    },
    lastName: {
        element: 'input',
        id: 'lastName',
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Last Name',
        touched: false,
        valid: false,
        value: '',
        validationRules: {
            minLength: 3,
        },
        errorMessage: 'Name must be 3 characters long!',
    },
    address: {
        element: 'input',
        id: 'address',
        name: 'address',
        type: 'text',
        label: 'Address',
        placeholder: 'Enter your street, house number, postal code...',
        touched: false,
        valid: false,
        value: '',
        validationRules: {
            minLength: 5,
        },
        errorMessage: 'Please enter a valid address!',
    },
    country: {
        element: 'select',
        id: 'country',
        name: 'country',
        label: 'Country',
        placeholder: 'Select your country',
        touched: false,
        valid: false,
        value: '',
        options: [...CountryList],
        validationRules: {
            required: true,
        },
        errorMessage: 'Please select your country!',
    },
};

export default FormInitialState;
