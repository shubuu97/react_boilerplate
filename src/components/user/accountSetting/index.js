// External dependencies
import React, { useReducer } from 'react';

// Components
import FormField from '../../generic/FormField';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

// Utilities
import formFieldReducer from '../../../utility/form/reducers/FormFieldReducer';
import formInitialState from './FormInitialState';
import {
    INPUT_CHANGE,
    CONFIRM_PASSWORD_INPUT_CHANGE,
} from '../../../utility/form/actionTypes';

/**
 * Account setting form
 */
const AccountSetting = () => {
    const [formState, dispatch] = useReducer(
        formFieldReducer,
        formInitialState,
    );

    const { email, password, confirmPassword } = formState || {};

    /**
     * Input change handler
     * @param {Object} inputChangeEvent
     * @param {String} actionType
     */
    const handleChange = (inputChangeEvent, actionType) => {
        const { name, value } = inputChangeEvent?.target ?? {};

        dispatch({
            type: actionType,
            name,
            value,
        });
    };

    return (
        <div>
            <form>
                <FormField
                    {...email}
                    handleChange={(event) => handleChange(event, INPUT_CHANGE)}
                />

                <FormField
                    {...password}
                    handleChange={(event) => handleChange(event, INPUT_CHANGE)}
                />
                <PasswordStrengthIndicator password={password} />

                <FormField
                    {...confirmPassword}
                    handleChange={(event) =>
                        handleChange(event, CONFIRM_PASSWORD_INPUT_CHANGE)
                    }
                />
            </form>
        </div>
    );
};

export default AccountSetting;
