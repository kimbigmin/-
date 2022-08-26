import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './user/User';
import logger from 'redux-logger';
import data from './Data';
import createSagaMiddleware from '@redux-saga/core';
import view from './View';
import userSaga from './user/userSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        user: userReducer,
        data,
    },
    devTools: process.env.NODE_ENV === 'development', // 이 외에 정보 더 생기면 gitignore에 추가해서 푸쉬 안하도록 설정해야됨
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware, logger),
});
sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
