import { call, put, takeLatest } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import { PayloadAction } from '@reduxjs/toolkit';
import { getData, getDataSuccess, getDataFailure } from './classSlice';
import { getClass } from '../../graphql/queries';

const TEMP_ID = '8f472b3c-88d5-4b8b-80bd-af1bcc263737';

const fetchStudents = async (id: string = TEMP_ID) => {
    try {
        const result: any = await API.graphql(
            graphqlOperation(getClass, {
                id,
            }),
        );
        return result.data.getClass;
    } catch (err) {
        throw new Error(
            `학생 리스트를 불러오는 중 에러가 발생했습니다. : ${err}`,
        );
    }
};

function* getStudentsData(action: PayloadAction<any>) {
    const params = action.payload.id;
    try {
        const res: any[] = yield call(fetchStudents, params);
        yield put(getDataSuccess(res));
    } catch (e) {
        yield put(getDataFailure);
    }
}

function* classSaga() {
    yield takeLatest(getData, getStudentsData);
}

export default classSaga;
