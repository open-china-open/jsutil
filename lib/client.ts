export class client {
    /**
     * 判断string类型
     * @param input
     */
    static isString(input: any): boolean {
        return Object.prototype.toString.call(input) == "[object String]";
    }

    /**
     *  判断array类型
     * @param input
     */
    static isArray(input: any): boolean {
        return Object.prototype.toString.call(input) == "[object Array]";
    }

    /**
     * 检查手机号
     * @param phone
     */
    static checkPhone(phone: string): boolean {
        return /^1\d{10}$/.test(phone);
    }

    /**
     * 检查邮箱
     * @param email
     */
    static checkEmail(email: string): boolean {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
    }

    /**
     * 字符串随机
     * @param length
     */
    static randomStr(length: number): string {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let noceStr = "",
            maxPos = chars.length;
        while (length--) noceStr += chars[(Math.random() * maxPos) | 0];
        return noceStr;
    }

    /**
     * 数字随机
     * @param length
     */
    static randomNumStr(length: number): string {
        const chars = "0123456789";
        let noceStr = "",
            maxPos = chars.length;
        while (length--) noceStr += chars[(Math.random() * maxPos) | 0];
        return noceStr;
    }

    /**
     * 数组取并集
     */
    static arrayUnion(...args) {}

    /**
     * 数组取交集
     */
    static arrayIntersection() {}
}
