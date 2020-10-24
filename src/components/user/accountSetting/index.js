// External dependencies
import React, { useReducer, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Components
import FormField from '../../generic/FormField';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

// Utilities
import formReducer from '../../../utility/form/reducers/FormReducer';
import {
    createReqBody,
    mapStateWithStore,
} from '../../../utility/CommonFunctions';
import {
    MAP_STATE_WITH_STORE,
    INPUT_CHANGE,
    PASSWORD_INPUT_CHANGE,
    CONFIRM_PASSWORD_INPUT_CHANGE,
} from '../../../utility/form/actionTypes';
import { UPDATE_DATA_API } from '../../../utility/Api';

import genericPostActionCreator from '../../../store/actions/GenericPostActionCreator';
import { UPDATE_ACCOUNT_SETTINGS } from '../../../store/action_types';
import formInitialState from './FormInitialState';

/**
 * Account setting form
 */
const AccountSetting = () => {
    const [formState, dispatch] = useReducer(formReducer, formInitialState);

    const storeDispatch = useDispatch();

    const { data, isLoading, success, message } = useSelector(
        (state) => state?.accountSetting ?? {},
        shallowEqual,
    );

    useEffect(() => {
        // Do not update state in loading state
        if (!isLoading) {
            const updatedFormState = mapStateWithStore(formState, data);

            dispatch({
                type: MAP_STATE_WITH_STORE,
                updatedFormState,
            });
        }
    }, [data]);

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

    const updateFormData = (formEvent) => {
        formEvent.preventDefault();
        const reqBody = createReqBody(formState);
        const successMsg = 'Account Settings Updated Successfully!';

        storeDispatch(
            genericPostActionCreator(
                UPDATE_ACCOUNT_SETTINGS,
                UPDATE_DATA_API,
                reqBody,
                successMsg,
            ),
        );
    };

    return (
        <div>
            <form onSubmit={updateFormData}>
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
                {isLoading ? 'Loading...' : <button>UPDATE</button>}
            </form>
            <p>{message}</p>
        </div>
    );
};

export default AccountSetting;
