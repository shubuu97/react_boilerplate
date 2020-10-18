// External dependencies
import React, { useReducer } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Components
import FormField from '../../generic/FormField';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

// Utilities
import formFieldReducer from '../../../utility/form/reducers/FormFieldReducer';
import { createReqBody } from '../../../utility/CommonFunctions';
import {
    INPUT_CHANGE,
    PASSWORD_INPUT_CHANGE,
    CONFIRM_PASSWORD_INPUT_CHANGE,
} from '../../../utility/form/actionTypes';
import { UPDATE_DATA } from '../../../utility/Api';

import genericPostActionCreator from '../../../store/actions/GenericPostActionCreator';
import { UPDATE_ACCOUNT_SETTINGS } from '../../../store/action_types';
import formInitialState from './FormInitialState';

/**
 * Account setting form
 */
const AccountSetting = () => {
    const [formState, dispatch] = useReducer(
        formFieldReducer,
        formInitialState,
    );

    const { isLoading, success, message } = useSelector(
        (state) => state?.accountSetting ?? {},
        shallowEqual,
    );

    const storeDispatch = useDispatch();

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

    const updateDataHandler = () => {
        const reqBody = createReqBody(formState);
        const successMsg = 'Account Settings Updated Successfully!';

        storeDispatch(
            genericPostActionCreator(
                UPDATE_ACCOUNT_SETTINGS,
                UPDATE_DATA,
                reqBody,
                successMsg,
            ),
        );
    };

    return (
        <div>
            {/* <form> */}
            <FormField
                {...email}
                handleChange={(event) => handleChange(event, INPUT_CHANGE)}
            />

            <FormField
                {...password}
                handleChange={(event) =>
                    handleChange(event, PASSWORD_INPUT_CHANGE)
                }
            />
            <PasswordStrengthIndicator password={password} />

            <FormField
                {...confirmPassword}
                handleChange={(event) =>
                    handleChange(event, CONFIRM_PASSWORD_INPUT_CHANGE)
                }
            />
            {isLoading ? (
                'Loading...'
            ) : (
                <button onClick={updateDataHandler}>UPDATE</button>
            )}
            {/* </form> */}
            <p>{message}</p>
        </div>
    );
};

export default AccountSetting;
