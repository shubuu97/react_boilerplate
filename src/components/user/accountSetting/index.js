import React, { useReducer } from 'react';
import FormField from '../../generic/FormField';
import formFieldReducer from '../../../utility/form/reducers/FormFieldReducer';
import formInitialState from './FormInitialState';
import {
    INPUT_CHANGE,
    CONFIRM_PASSWORD,
} from '../../../utility/form/actionTypes';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

const AccountSetting = () => {
    const [formState, dispatch] = useReducer(
        formFieldReducer,
        formInitialState,
    );

    const { email, password, confirmPassword } = formState || {};
    return (
        <div>
            <form>
                <FormField
                    {...email}
                    handleChange={(event) => {
                        const { name, value } = event?.target ?? {};
                        dispatch({
                            type: INPUT_CHANGE,
                            name,
                            value,
                        });
                    }}
                />
                <FormField
                    {...password}
                    handleChange={(event) => {
                        const { name, value } = event?.target ?? {};
                        dispatch({
                            type: INPUT_CHANGE,
                            name,
                            value,
                        });
                    }}
                />
                <PasswordStrengthIndicator data={password} />
                <FormField
                    {...confirmPassword}
                    handleChange={(event) => {
                        const { name, value } = event?.target ?? {};
                        dispatch({
                            type: CONFIRM_PASSWORD,
                            name,
                            value,
                        });
                    }}
                />
            </form>
        </div>
    );
};

export default AccountSetting;
