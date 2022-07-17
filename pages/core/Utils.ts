/** 공통 함수 */
class Utils {
    isMobile(): boolean {
        const userAgent = navigator.userAgent;
        return (['iPhone', 'Android'].includes(userAgent)) ? true : false;
    }
    sysdate(date: Date): string {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);

        return year + month + day;
    }
    systime(date: Date): string {
        const hours = ('0' + date.getHours()).slice(-2); 
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2); 

        return hours + minutes + seconds;
    }
}

export default Utils.prototype;