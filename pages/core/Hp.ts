import { Store } from "redux";
import { StoreStateType } from "../types/store";

/** core 핵심단 여기서 dispatch하는 로직 추가해서 상태관리할 수 있게 끔 */
class Hp {
    private _store!: Store;

    public init(inStore: Store, param: { firstPage: string }) {
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
}

// 개발자도구에서 debugger 안걸린 상태로도 값 확인 가능 
// devhp._store.getState() ~ 
const hp = (window as any).devhp = new Hp();
export default hp;