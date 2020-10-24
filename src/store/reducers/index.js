// External dependencies
import { combineReducers } from 'redux';

// Reducers
import genericReducer from './GenericReducer';

// Action types
import { UPDATE_ACCOUNT_SETTINGS, UPDATE_USER_INFO } from '../action_types';

const updateAccountSettingReducer = genericReducer(UPDATE_ACCOUNT_SETTINGS);
const updateUserInfoReducer = genericReducer(UPDATE_USER_INFO);

export default combineReducers({
    accountSetting: updateAccountSettingReducer,
    userInfo: updateUserInfoReducer,
});
