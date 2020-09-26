import { AsyncTest, Expect, Test, TestCase, TestFixture } from "alsatian";
import { url as jsurl } from "../lib/url";

@TestFixture("URL test")
export class URLTests {
    // @TestCase(
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg",
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg"
    // )
    // @TestCase(
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg?test=你好",
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg?test=%E4%BD%A0%E5%A5%BD"
    // )
    // @TestCase(
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg?test=￥",
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg?test=%EF%BF%A5"
    // )
    // @TestCase(
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/&(){}{[]&^%.jpg?test=￥",
    //     "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%26()%7B%7D%7B%5B%5D%26%5E%25.jpg?test=%EF%BF%A5"
    // )
    // public async encodePathRetainSep(url: string, equal: any) {
    //     Expect(jsurl.encodePathRetainSep(url)).toEqual(equal);
    // }
    @TestCase(
        "mongodb://admin:admin@127.0.0.1:27017/a/b/gan?authSource=admin#maodian",
        JSON.stringify({
            href: "mongodb://admin:admin@127.0.0.1:27017/a/b/gan?authSource=admin#maodian",
            protocol: "mongodb",
            host: "127.0.0.1",
            username: "admin",
            password: "admin",
            port: "27017",
            search: { authSource: "admin" },
            anchor: "maodian",
            pathname: ["a", "b", "gan"]
        })
    )
    @TestCase(
        "mongodb://127.0.0.1:27017/a/b/gan?authSource=admin#maodian",
        JSON.stringify({
            href: "mongodb://127.0.0.1:27017/a/b/gan?authSource=admin#maodian",
            protocol: "mongodb",
            host: "127.0.0.1",
            port: "27017",
            search: { authSource: "admin" },
            anchor: "maodian",
            pathname: ["a", "b", "gan"]
        })
    )
    @TestCase(
        "mongodb://127.0.0.1/a/b/gan?authSource=admin#maodian",
        JSON.stringify({
            href: "mongodb://127.0.0.1/a/b/gan?authSource=admin#maodian",
            protocol: "mongodb",
            host: "127.0.0.1",
            search: { authSource: "admin" },
            anchor: "maodian",
            pathname: ["a", "b", "gan"]
        })
    )
    @TestCase(
        "mongodb://127.0.0.1",
        JSON.stringify({
            href: "mongodb://127.0.0.1",
            protocol: "mongodb",
            host: "127.0.0.1"
        })
    )
    @TestCase(
        "mongodb://127.0.0.1?name=cd&age=18",
        JSON.stringify({
            href: "mongodb://127.0.0.1",
            protocol: "mongodb",
            host: "127.0.0.1",
            search: { name: "cd", age: "18" }
        })
    )
    public async parse(url: string, equal: any) {
        Expect(JSON.stringify(jsurl.parse(url))).toEqual(equal);
    }
}
