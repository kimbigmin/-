import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import logger from 'redux-logger';
import data from './Data';
import createSagaMiddleware from '@redux-saga/core';
import view from './View';
import userSaga from './user/userSaga';
import classSaga from './class/classSaga';
import classReducer from './class/classSlice';
import { all, takeLatest } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([userSaga(), classSaga()]);
}

export const store = configureStore({
    reducer: {
        user: userReducer,
        class: classReducer,
        data,
    },
    devTools: process.env.NODE_ENV === 'development', // 이 외에 정보 더 생기면 gitignore에 추가해서 푸쉬 안하도록 설정해야됨
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware, logger),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
