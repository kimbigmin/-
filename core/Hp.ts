import { hideLoading } from './../store/View';
import { Store } from "redux";
import { initialDataState, setState } from "../store/Data";
import { hideAlert, showAlert, initialViewState, showLoading } from "../store/View";
import { StoreStateType, ShowAlertOptionType, ShowLodingOptionType } from "../types/store";

type ValueType = keyof typeof initialDataState | keyof typeof initialViewState;

/** core 핵심단 여기서 dispatch하는 로직 추가해서 상태관리할 수 있게 끔 */
export class Hp {
    private _store!: Store;
    
    public init(inStore: Store):any {
        this._store = inStore;
    }

    public get store() {
        return this._store;
    }

    public set store(inStore: Store) {
        this._store = inStore;
    }

    public get state(): StoreStateType {
        return this.store.getState();
    }
    
    public getState(key: ValueType) {
        return this._store.getState()['data'][key];
    }

    public setState(key: ValueType, value: any): void {
        this._store.dispatch(setState({ [key]: value }));
    }

    public alert(message: string, options?: ShowAlertOptionType) {
        if (message === 'hide') {
            this.store.dispatch(hideAlert());
        } else {
            this.store.dispatch(showAlert({
                message,
                alertOptions: options
            }))
        }
    }

    public showLoading(name: string, options?: ShowLodingOptionType) {
        this.store.dispatch(showLoading({
            loadingName: name,
            loadingOptions: options
        }))
    }

    public hideLoading(name: string) {
        this.store.dispatch(hideLoading({
            loadingName: name
        }))
    }
}

// 서버사이드렌더링 떔에..
// 렌더링 할때 초기에는 전역객체는 선언되지 않아 해당 변수를 참조할 수 없음
let devhp = new Hp();
if (typeof window !== 'undefined') {
    // 개발자도구에서 debugger 안걸린 상태로도 값 확인 가능 
    // devhp._store.getState() ~ 
    devhp = (window as any).devhp = new Hp();
}

export default devhp;