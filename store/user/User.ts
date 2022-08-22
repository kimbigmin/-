import { createAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { StoreStateUserType } from '../../types/store';
import { AppState } from '../store';

// 로그인은서버 추가시 업데이트

// reducer
const initialState: StoreStateUserType = {
    isLogin: false,
    email: '',
    createdAt: '',
    grade: '',
    id: '',
    image: '',
    isTeacher: false,
    managing: {
        items: [],
    },
    name: '',
    school: '',
    schoolName: '',
    sex: 'man',
    updatedAt: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.isLogin = true;
            state = action.payload.data.getTeacher;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.user,
            };
        },
    },
});

export const { login } = userSlice.actions;
export const selectUserState = (state: AppState) => state.user;
export default userSlice.reducer;
