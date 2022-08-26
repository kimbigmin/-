import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import hp from '../../core/Hp';
import { API, graphqlOperation } from 'aws-amplify';
import { getTeacher } from '../../graphql/queries';
import { PayloadAction } from '@reduxjs/toolkit';
import { userLogin, userLoginSuccess, userLoginFailure } from './User';

const loginAPI = async (id = '81088960-f3bb-4059-8d43-17dd0fed519c') => {
    try {
        const result = await API.graphql(
            graphqlOperation(getTeacher, {
                id,
            }),
        );
        return result;
    } catch (err) {
        throw new Error(`로그인 정보를 불러 올 수 없습니다. : ${err}`);
    }
};

function* login(action: PayloadAction<string>) {
    const params = action.payload;
    try {
        // loginAPI 함수 실행
        const response: any[] = yield call(loginAPI, params);
        // LOG_IN_SUCCESS dispatch
        yield put(userLoginSuccess(response));
    } catch (e) {
        hp.warnLog(e);
        // LOG_IN_FAILURE dispatch
        yield put(userLoginFailure);
    }
}

function* userSaga() {
    // 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(userLogin, login);
}

export default userSaga;
