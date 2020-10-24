// External dependencies
import React, { useReducer, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Utilities
import formReducer from '../../../utility/form/reducers/FormReducer';
import {
    renderFormFields,
    createReqBody,
    mapStateWithStore,
} from '../../../utility/CommonFunctions';
import { UPDATE_DATA_API } from '../../../utility/Api';
import { MAP_STATE_WITH_STORE } from '../../../utility/form/actionTypes';

import genericPostActionCreator from '../../../store/actions/GenericPostActionCreator';
import { UPDATE_USER_INFO } from '../../../store/action_types';
import formInitialState from './FormInitialState';

/**
 * User information form
 */
const UserInfo = () => {
    const [formState, dispatch] = useReducer(formReducer, formInitialState);

    const storeDispatch = useDispatch();

    const { data, isLoading, success, message } = useSelector(
        (state) => state?.userInfo ?? {},
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

    const updateFormData = (formEvent) => {
        formEvent.preventDefault();

        const reqBody = createReqBody(formState);
        const successMsg = 'User Information Updated Successfully!';

        storeDispatch(
            genericPostActionCreator(
                UPDATE_USER_INFO,
                UPDATE_DATA_API,
                reqBody,
                successMsg,
            ),
        );
    };

    const formFieldsOrder = ['firstName', 'lastName', 'address', 'country'];

    return (
        <div>
            <form onSubmit={updateFormData}>
                {renderFormFields(formState, dispatch, formFieldsOrder)}
                {isLoading ? 'Loading...' : <button>UPDATE</button>}
            </form>

            <p>{message}</p>
        </div>
    );
};

export default UserInfo;
