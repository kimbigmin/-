import { createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { StoreStateUserType } from '../types/store';
import Utils from '../core/Utils';

// types
const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';

// actions
export const getLogInSuccess = createAction(LOG_IN_SUCCESS);
export const getLogInFailure = createAction(LOG_IN_FAILURE);


// reducer
const initialUserState: StoreStateUserType= {
    isLogin: false,
    name: ''
}

const userReducer = (state = initialUserState, action: {
    type: string,
    payload: any
}) => {
    switch(action.type) {
        case HYDRATE:
            return action.payload;
        case LOG_IN_SUCCESS:
            return {
                ...state
            }
        case LOG_IN_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default userReducer;