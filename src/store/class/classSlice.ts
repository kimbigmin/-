import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: any = {
    students: [],
    pending: [],
    name: '',
    endurance: '',
    flexibility: '',
    strength: '',
    speediness: '',
    isLoading: false,
    isError: false,
};

const initialStudent = {
    age: 0,
    belong: null,
    classNum: 0,
    classPendingId: null,
    classStudentsId: '',
    createdAt: '',
    email: '',
    grade: '',
    id: '',
    image: null,
    isTeacher: false,
    name: '',
    record: {
        createdAt: '',
        endurance: '',
        flexibility: '',
        id: '',
        speediness: '',
        strength: '',
        updatedAt: '',
    },
    school: '',
    schoolName: '',
    sex: '',
    studentBelongId: null,
    studentRecordId: '',
    updatedAt: '',
};

export const classSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {
        getData(state, action) {
            state.isLoading = true;
            const studentNumber = +action.payload.num;

            if (state.students.length === 0) {
                const defaultArr = new Array(studentNumber)
                    .fill(null)
                    .map((_, idx: number) => {
                        return { ...initialStudent, classNum: idx + 1 };
                    });
                state.students = defaultArr;
            }
        },

        getDataSuccess(state, action) {
            state.isLoading = false;
            action.payload.students.items.forEach((el: any, idx: number) => {
                state.students[el.classNum - 1] = el;
            });
            state.pending = action.payload.pending.items;
            state.name = action.payload.name;
            state.endurance = action.payload.endurance;
            state.flexibility = action.payload.flexibility;
            state.strength = action.payload.strength;
            state.speediness = action.payload.speediness;
        },
        getDataFailure(state, action) {
            state.isLoading = false;
            state.isError = true;
        },
    },
});

export const { getData, getDataSuccess, getDataFailure } = classSlice.actions;
export default classSlice.reducer;
