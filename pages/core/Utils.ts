/** 공통 함수 */
class Utils {
    isMobile(): boolean {
        const user = navigator.userAgent;

        if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) return true;

        return false;
    }
}

export default Utils.prototype;