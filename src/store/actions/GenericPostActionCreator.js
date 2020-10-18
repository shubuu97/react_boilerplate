// External dependencies
import axios from 'axios';

// Utilities
import { BASE_URL } from '../../utility/Api';

/**
 * Generic POST action creator
 *
 * @param {String}* identifier Unique action type
 * @param {String}* api
 * @param {Object}* reqBody
 * @param {String} successMsg Message to save in success case
 * @param {String} errorMsg Message to save in error case
 */

const genericPostActionCreator = (
    identifier,
    api,
    reqBody = {},
    successMsg = 'Action Completed Successfully!',
    errorMsg = 'Something Went Wrong!',
) => {
    return async (dispatch) => {
        dispatch({
            type: `${identifier}_INIT`,
            payload: {
                isLoading: true,
                data: {},
                success: undefined,
                message: '',
            },
        });

        try {
            const result = await axios.post(BASE_URL + api, reqBody);

            const { data, status } = result;

            dispatch({
                type: `${identifier}_SUCCESS`,
                payload: {
                    isLoading: false,
                    data,
                    success: status === 201,
                    message: successMsg,
                },
            });
        } catch (error) {
            dispatch({
                type: `${identifier}_FAILURE`,
                payload: {
                    isLoading: false,
                    data: {},
                    success: undefined,
                    message: errorMsg,
                },
            });
        }
    };
};

export default genericPostActionCreator;
