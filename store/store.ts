import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userSlice } from './user/User';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import data from '../store/Data';
import view from '../store/View';

const makeStore = () =>
    configureStore({
        reducer: {
            [userSlice.name]: userSlice.reducer,
            data,
        },
        devTools: process.env.NODE_ENV === 'development', // 이 외에 정보 더 생기면 gitignore에 추가해서 푸쉬 안하도록 설정해야됨
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(logger),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
