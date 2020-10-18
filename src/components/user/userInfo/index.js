// External dependencies
import React, { useReducer } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Utilities
import formFieldReducer from '../../../utility/form/reducers/FormFieldReducer';
import {
    renderFormFields,
    createReqBody,
} from '../../../utility/CommonFunctions';
import { UPDATE_DATA } from '../../../utility/Api';

import genericPostActionCreator from '../../../store/actions/GenericPostActionCreator';
import { UPDATE_USER_INFO } from '../../../store/action_types';
import formInitialState from './FormInitialState';

/**
 * User information form
 */
const UserInfo = () => {
    const [formState, dispatch] = useReducer(
        formFieldReducer,
        formInitialState,
    );

    const { isLoading, success, message } = useSelector(
        (state) => state?.userInfo ?? {},
        shallowEqual,
    );

    const storeDispatch = useDispatch();

    const updateDataHandler = () => {
        const reqBody = createReqBody(formState);
        const successMsg = 'User Information Updated Successfully!';

        storeDispatch(
            genericPostActionCreator(
                UPDATE_USER_INFO,
                UPDATE_DATA,
                reqBody,
                successMsg,
            ),
        );
    };

    const formFieldsOrder = ['firstName', 'lastName', 'address', 'country'];

    return (
        <div>
            <div>{renderFormFields(formState, dispatch, formFieldsOrder)}</div>
            {isLoading ? (
                'Loading...'
            ) : (
                <button onClick={updateDataHandler}>UPDATE</button>
            )}
            <p>{message}</p>
        </div>
    );
};

export default UserInfo;
