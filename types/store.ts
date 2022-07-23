export type StoreStateDataType = {
    sysdate: string,
    systime: string,
    isLogin: boolean,
    isMobile: boolean,
    userInfo: {
        type: 'S' | 'T' // S(Student), T(Teacher)
    },
    title: string,
    path: string
}

export type StoreStateViewType = {
    pageInfo: {
        title: string,
        type?: 'S' | 'T' // S(Student), T(Teacher)
    },
    showAlertMessage: string,
    showAlertOptions: ShowAlertOptionType
}

export type StoreStateType = {
    data: StoreStateDataType,
    view: StoreStateViewType
}

export type ShowAlertOptionType = {
    type: 'alert' | 'confirmAlert' // default = 'alert'
    titleLabel?: string
    confirmLabel?: string
    cancelLabel?: string
    closeHandler?: Function
}