import { Dispatch } from 'redux';
import { StoreStateViewType } from '../types/store';

// reducer 
export const initialViewState: StoreStateViewType = {
    pageInfo: {
        title: '페이지 기입하기?'
    }
}

const viewReducer = (state = initialViewState, action: any) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default viewReducer;