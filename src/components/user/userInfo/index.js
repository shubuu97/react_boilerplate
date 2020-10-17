import React, { useReducer } from 'react';
import FormField from '../../generic/FormField';
import formFieldReducer from '../../../utility/form/reducers/FormFieldReducer';
import formInitialState from './FormInitialState';
import { INPUT_CHANGE } from '../../../utility/form/actionTypes';

const UserInfo = () => {
    const [formState, dispatch] = useReducer(
        formFieldReducer,
        formInitialState,
    );

    const { firstName, lastName, address, country } = formState || {};
    return (
        <div>
            <form>
                <FormField
                    {...firstName}
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
                    {...lastName}
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
                    {...address}
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
                    {...country}
                    handleChange={(event) => {
                        const { name, value } = event?.target ?? {};
                        dispatch({
                            type: INPUT_CHANGE,
                            name,
                            value,
                        });
                    }}
                />
            </form>
        </div>
    );
};

export default UserInfo;
