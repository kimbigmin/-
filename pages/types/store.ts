export type StoreStateDataType = {
    sysdate: string,
    systime: string,
    isLogin: boolean,
    isMobile: boolean,
    userInfo: {
        type: 'S' | 'T' // S(Student), T(Teacher)
    }
}

export type StoreStateViewType = {
    pageInfo: {
        title: string,

    }
}

export type StoreStateType = {

}