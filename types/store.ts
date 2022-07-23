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
    showAlertOptions: ShowAlertOptionType,
    showLoadingName: string,
    showLoadingOptions: ShowLodingOptionType
}

export type StoreStateType = {
    data: StoreStateDataType,
    view: StoreStateViewType
}


// Option Types
export type ShowAlertOptionType = {
    type: 'alert' | 'confirmAlert'
    title: string
    confirm: string
    cancel: string
    color: 'error' | 'info' | 'success' | 'warning' | string
    callbackFunc: Function
}

export type ShowLodingOptionType = {
    color: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    disableShrink: boolean,
    size: number | string,
    thickness: number
}