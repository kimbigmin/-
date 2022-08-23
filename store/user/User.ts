import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { StoreStateUserInitialState } from '../../types/store';
import { AppState } from '../store';

// 로그인은서버 추가시 업데이트
const initialState: StoreStateUserInitialState = {
    user: null,
    isLoading: false,
    getUserDone: null,
    getUserError: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin(state, action) {
            state.isLoading = true;
            state.getUserDone = null;
            state.getUserError = null;
        },
        userLoginSuccess(state, action) {
            state.isLoading = false;
            state.getUserDone = action.payload.data.message;
            state.user = action.payload.data.getTeacher;
        },
        userLoginFailure(state, action) {
            state.isLoading = false;
            state.getUserError = action.payload.data.message;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.data.getTeacher,
            };
        },
    },
});

export const { userLogin, userLoginFailure, userLoginSuccess } =
    userSlice.actions;
export const selectUserState = (state: AppState) => state.user;
export default userSlice.reducer;
