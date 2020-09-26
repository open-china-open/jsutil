interface URL {
    href?: string;
    protocol?: string;
    host?: string;
    port?: string;
    pathname?: string;
    search?: any;
    username?: string;
    password?: string;
    /**
     *  锚点
     */
    anchor?: string;
}

export class url {
    /**
     * url编码保留 /
     * https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg
     * https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg
     * @param url
     */
    // static encodePathRetainSep(url: string): string {
    //     return "";
    //     // let obj = queryString.parseUrl(url, { parseFragmentIdentifier: true });
    //     // let query: any = obj.query;
    //     // let tmp: any = {};
    //     // if (query)
    //     //     query.forEach((element) => {
    //     //         let key = encodeURIComponent(element);
    //     //         let value = encodeURIComponent(query[element]);
    //     //         tmp[key] = value;
    //     //     });
    //     // obj.query = query;
    //     // console.log(urlObj);
    //     // urlObj.pathname = urlObj.pathname
    //     //     .split("/")
    //     //     .map((e) => {
    //     //         try {
    //     //             e = decodeURIComponent(e);
    //     //         } catch (error) {}
    //     //         return encodeURIComponent(e);
    //     //     })
    //     //     .join("/");
    //     // return urlObj.toString();
    // }

    static parse(url: string): URL {
        let a = {
            href: url,
            protocol: this.getProtocol(url),
            host: this.getHost(url),
            port: this.getPort(url),
            pathname: this.getPath(url),
            search: this.getSearch(url),
            anchor: this.getAnchor(url),
            ...this.getUnameAndPwd(url)
        };
        console.log("输入", url, "输出", a);
        return a;
    }

    static getProtocol(url: string): string | undefined {
        let tmp = url.match(/(\w+):\/\//);
        if (tmp) return tmp[1];
        return undefined;
    }

    static getUnameAndPwd(url: string): { username: string; password: string } | undefined {
        let tmp = url.match(/\w+:\/\/(\w+):(\w+)@/);
        if (tmp) return { username: tmp[1], password: tmp[2] };
        return undefined;
    }

    static getHost(url: string): string | undefined {
        let tmp =
            url.match(/\w+:\/\/\w+:\w+@(.+):/) ||
            url.match(/\w+:\/\/\w+:\w+@(.+?)\//) ||
            url.match(/\w+:\/\/\w+:\w+@(.+)\?/) ||
            url.match(/\w+:\/\/\w+:\w+@(.+)\#/) ||
            url.match(/\w+:\/\/\w+:\w+@(.+)/) ||
            url.match(/\w+:\/\/(.+):/) ||
            url.match(/\w+:\/\/(.+?)\//) ||
            url.match(/\w+:\/\/(.+)\?/) ||
            url.match(/\w+:\/\/(.+)\#/) ||
            url.match(/\w+:\/\/(.+)/);
        if (tmp) return tmp[1];
        return undefined;
    }

    static getPort(url: string): string | undefined {
        let tmp =
            url.match(/\w+:\/\/\w+:\w+@.+:(\d+)\//) ||
            url.match(/\w+:\/\/\w+:\w+@.+:(\d+)\?/) ||
            url.match(/\w+:\/\/\w+:\w+@.+:(\d+)\#/) ||
            url.match(/\w+:\/\/.+:(\d+)\//) ||
            url.match(/\w+:\/\/.+:(\d+)\?/) ||
            url.match(/\w+:\/\/.+:(\d+)\#/);
        if (tmp) return tmp[1];
        return undefined;
    }

    static getPath(url: string): string | undefined {
        let tmp =
            url.match(/\w+:\/\/.+:\d+\/(.+)\?/) ||
            url.match(/\w+:\/\/.+:\d+\/(.+)\#/) ||
            url.match(/\w+:\/\/.+:\d+\/(.+)/) ||
            url.match(/\w+:\/\/.+\.\w+\/(.+)\?/) ||
            url.match(/\w+:\/\/.+\.\w+\/(.+)\#/) ||
            url.match(/\w+:\/\/.+\.\w+\/(.+)/);
        if (tmp) return tmp[1];
        return undefined;
    }

    static getSearch(url: string): string | undefined {
        let tmp = url.match(/\w+:\/\/.+\?(.+)\#/) || url.match(/\w+:\/\/.+\?(.+)/);
        if (tmp) return tmp[1];
        return undefined;
    }

    static getAnchor(url: string): string | undefined {
        let tmp = url.match(/\w+:\/\/.+\#(.+)/);
        if (tmp) return tmp[1];
        return undefined;
    }
}
