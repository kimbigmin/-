import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from './User';
import hp from '../../core/Hp';

function loginAPI() {
    // 서버로 API 요청
} 

function* login() {
    try {
        // loginAPI 함수 실행
        yield call(loginAPI);

        // LOG_IN_SUCCESS dispatch
        yield put({
            type: LOG_IN_SUCCESS,
        });
    } catch (e) {
        hp.warnLog(e);

        // LOG_IN_FAILURE dispatch
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    // 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(LOG_IN, login);
}

export default function* dataSaga() {
    // all 함수 안에 배열 형태로 넣어주면, 제네레이터 함수들이 병행적으로 동시에 실행되고, 전부 resolv 될 때까지 기다림. (Promise.all과 비슷)
    yield all([
        // 백그라운드에서 watchLogin이 실행
        fork(watchLogin),
    ]);
}
