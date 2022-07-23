import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { StoreStateViewType, ShowAlertOptionType } from '../types/store';

// types
export const SHOW_ALERT="view/SHOW_ALERT";
export const HIDE_ALERT="view/HIDE_ALERT";


// actions
export const showAlert = createAction<{
    message: string,
    alertParam?: ShowAlertOptionType
}>(SHOW_ALERT);

export const hideAlert = createAction(HIDE_ALERT);


// reducer 

const iniAlertOptions: ShowAlertOptionType = {
    type: 'alert',
    titleLabel: '',
    confirmLabel: '확인',
    cancelLabel: '취소',
    closeHandler: ()=>{}
}

export const initialViewState: StoreStateViewType = {
    pageInfo: {
        title: '페이지 기입하기?'
    },
    showAlertMessage: "",
    showAlertOptions: iniAlertOptions
}

const viewReducer = (state = initialViewState, action:{
    type: string,
    payload: any
}) => {
    switch(action.type) {
        case SHOW_ALERT:
            const alertParam: ShowAlertOptionType = action.payload.alertParam;
            const alertOptions: any = {
                type: (alertParam && alertParam.type) || 'alert',
                titleLabel: (alertParam && alertParam.titleLabel) || '',
                confirmLabel: (alertParam && alertParam.confirmLabel) || '11확인',
                cancelLabel: (alertParam && alertParam.cancelLabel) || '취소',
                closeHandler: (alertParam && alertParam.closeHandler) || null,
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
                showAlertOptions: iniAlertOptions
            }
        default:
            return state;
    }
}

export default viewReducer;