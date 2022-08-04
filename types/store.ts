export type StoreStateDataType = {
    sysdate: string;
    systime: string;
    isMobile: boolean;
    path: string;
    userType?: 'S' | 'T';
    pageTitle: string;
    pagePath: string;
};

export type StoreStateViewType = {
    showAlertMessage: string;
    showAlertOptions: ShowAlertOptionType;
    showLoadingName: string;
    showLoadingOptions: ShowLodingOptionType;
};

export type StoreStateUserType = {
    isLogin: boolean;
    email: string;
    createdAt: string;
    grade?: string;
    id: string;
    image: string | null;
    isTeacher: boolean;
    managing?: any;
    name: string;
    school: string;
    schoolName: string;
    sex: 'man' | 'woman';
    updatedAt: string;
    age?: number;
    classNum?: number;
    belong?: any;
};

export type StoreStateType = {
    data: StoreStateDataType;
    view: StoreStateViewType;
    user: StoreStateUserType;
};

// Option Types
export type ShowAlertOptionType = {
    title: string;
    confirm: string;
    color: 'error' | 'info' | 'success' | 'warning';
    callbackFunc: Function;
};

export type ShowLodingOptionType = {
    color:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
    disableShrink: boolean;
    size: number | string;
    thickness: number;
};
