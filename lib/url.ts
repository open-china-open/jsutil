export class url {
    /**
     * url编码保留 /
     * https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg
     * https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg
     * @param url
     */
    static encodePathRetainSep(url: string): string {
        return new URL(url).toString();

        // let urlObj = new URL(url);
        // console.log(urlObj);
        // urlObj.pathname = urlObj.pathname
        //     .split("/")
        //     .map((e) => {
        //         try {
        //             e = decodeURIComponent(e);
        //         } catch (error) {}
        //         return encodeURIComponent(e);
        //     })
        //     .join("/");
        // return urlObj.toString();
    }
}
