import { createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { StoreStateViewType, ShowAlertOptionType, ShowLodingOptionType } from '../types/store';

// types
export const SHOW_ALERT="view/SHOW_ALERT";
export const HIDE_ALERT="view/HIDE_ALERT";
export const SHOW_LOADING="view/SHOW_LOADING";
export const HIDE_LOADING="view/HIDE_LOADING";

// actions
export const showAlert = createAction<{
    message: string,
    alertOptions?: ShowAlertOptionType
}>(SHOW_ALERT);

export const hideAlert = createAction(HIDE_ALERT);

export const showLoading = createAction<{
    loadingName?: string,
    loadingOptions?: ShowLodingOptionType
}>(SHOW_LOADING)

export const hideLoading = createAction<{
    loadingName?: string
}>(HIDE_LOADING)


// reducer 
const initAlertOptions: ShowAlertOptionType = {    
    title: '',
    confirm: '확인',
    color: 'success',
    callbackFunc: ()=>{}
}

const initLoadingOptions: ShowLodingOptionType = {
    color: 'success',
    disableShrink: false,
    size: 40,
    thickness: 3.6
}

export const initialViewState: StoreStateViewType = {
    pageInfo: {
        title: '페이지 기입하기?'
    },
    showAlertMessage: "",
    showAlertOptions: initAlertOptions,
    showLoadingName: "",
    showLoadingOptions: initLoadingOptions
}

const viewReducer = (state = initialViewState, action:{
    type: string,
    payload: any
}) => {
    switch(action.type) {
        case HYDRATE:
            return action.payload;
        case SHOW_ALERT:
            const alertParam: ShowAlertOptionType = action.payload.alertOptions;
            const alertOptions: ShowAlertOptionType = {
                title: (alertParam && alertParam.title) || '',
                confirm: (alertParam && alertParam.confirm) || '확인',
                color: (alertParam && alertParam.color) || 'success',
                callbackFunc: (alertParam && alertParam.callbackFunc) || (() => {})
            }
            return {
                ...state,
                showAlertMessage: action.payload.message,
                showAlertOptions: alertOptions
            }        
        case HIDE_ALERT:
            return {
                ...state,
                showAlertMessage: '',
                showAlertOptions: initAlertOptions
            }
        case SHOW_LOADING:
            const loadingParam: ShowLodingOptionType = action.payload.loadingOptions;
            const loadingOptions: ShowLodingOptionType = {
                color: (loadingParam && loadingParam.color) || 'success',
                disableShrink: (loadingParam && loadingParam.disableShrink) || false,
                size: (loadingParam && loadingParam.size) || 40,
                thickness: (loadingParam && loadingParam.thickness) || 3.6,
            }
            return {
                ...state,
                showLoadingName: action.payload.loadingName,
                showLoadingOptions: loadingOptions
            }
        case HIDE_LOADING:
            return {
                ...state,
                showLoadingName: '',
                showLoadingOptions: null
            }
        default:
            return state;
    }
}

export default viewReducer;