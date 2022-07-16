/** 공통 함수 */
class Utils {
    isMobile(): boolean {
        const userInfo = navigator.userAgent;

        if ( userInfo.indexOf("iPhone") > -1 || userInfo.indexOf("Android") > -1 ) return true;

        return false;
    }
}

export default Utils.prototype;