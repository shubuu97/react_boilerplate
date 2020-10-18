// External dependencies
import React, { useReducer } from 'react';

// Utilities
import formFieldReducer from '../../../utility/form/reducers/FormFieldReducer';
import { renderFormFields } from '../../../utility/CommonFunctions';
import formInitialState from './FormInitialState';

/**
 * User information form
 */
const UserInfo = () => {
    const [formState, dispatch] = useReducer(
        formFieldReducer,
        formInitialState,
    );

    const formFieldsOrder = ['firstName', 'lastName', 'address', 'country'];

    return (
        <form>{renderFormFields(formState, dispatch, formFieldsOrder)}</form>
    );
};

export default UserInfo;
