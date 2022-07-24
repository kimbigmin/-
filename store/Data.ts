import { createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { StoreStateDataType } from '../types/store';
import Utils from "../core/Utils";

// types
const GET_STATE="data/GET_STATE";
const SET_STATE="data/SET_STATE";

// actions
export const getState = createAction<{
    getState: any
}>(GET_STATE)

export const setState = createAction<{
    [key: string]:any
}>(SET_STATE)


// reducer
export const initialDataState: StoreStateDataType = {
    sysdate: Utils.sysdate(new Date()),
    systime: Utils.systime(new Date()),
    isLogin: false,
    isMobile: Utils.isMobile(),
    path: 'healthPaps',
    pageTitle: "HEALTH PAPS",
    pagePath: ""
}

const dataReducer = (state= initialDataState, action: {
    type: string,
    payload?: any
}) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        case GET_STATE:
            return {
                ...state,
                ...action.payload
            }
        case SET_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default dataReducer;