import { createAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
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
    userInfo: {
        type: 'S' // 현재는 학생
    },
    title: 'Health-PAPS',
    path: 'healthPaps'
}

const dataReducer = (state= initialDataState, action: {
    type: string,
    payload?: any
}) => {
    switch (action.type) {
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