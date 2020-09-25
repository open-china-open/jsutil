import { AsyncTest, Expect, Test, TestCase, TestFixture } from "alsatian";
import { url as jsurl } from "../lib/url";

@TestFixture("URL test")
export class URLTests {
    @TestCase(
        "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg",
        "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg"
    )
    @TestCase(
        "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg?test=你好",
        "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg?test=%E4%BD%A0%E5%A5%BD"
    )
    @TestCase(
        "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/你好.jpg?test=￥",
        "https://face-gan.oss-cn-hangzhou.aliyuncs.com/123/%E4%BD%A0%E5%A5%BD.jpg?test=%EF%BF%A5"
    )
    public async encodePathRetainSep(url: string, equal: any) {
        Expect(jsurl.encodePathRetainSep(url)).toEqual(equal);
    }
}
