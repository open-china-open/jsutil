import { AsyncTest, Expect, Test, TestCase, TestFixture } from "alsatian";
import { common } from "../lib/index";

@TestFixture("client fix")
export class SetOfTests {
    @TestCase([])
    public async isArray(input: any) {
        Expect(common.isArray(input)).toBe(true);
    }

    @TestCase("")
    public async isString(input: any) {
        Expect(common.isString(input)).toBe(true);
    }

    @TestCase("18071996467")
    public async checkPhone(phone: string) {
        Expect(common.checkPhone(phone)).toBe(true);
    }

    @TestCase("18468289@qq.com")
    public async checkEmail(email: string) {
        Expect(common.checkEmail(email)).toBe(true);
    }

    @TestCase(5)
    public async randomStr(length: number) {
        Expect(common.randomStr(length).length).toBe(length);
    }

    @TestCase(5)
    public async randomNumStr(length: number) {
        Expect(common.randomNumStr(length).length).toBe(length);
    }

    // @AsyncTest("asychronous test")
    // public async asyncTest() {
    //     const response = await somethingToHappen();
    //     Expect(response).toBeDefined();
    // }
    // pass arguments into your test functions to keep your test code from being repetative
    // @TestCase(2, 2, 4)
    // @TestCase(2, 3, 5)
    // @TestCase(3, 3, 6)
    // @Test("addition tests")
    // public addTest(firstNumber: number, secondNumber: number, expectedSum: number) {
    //     Expect(firstNumber + secondNumber).toBe(expectedSum);
    // }
    // @TestCase(3, 3)
    // public addTest(a: number, b: number) {
    //     Expect(client.sun(a, b)).toBe(6);
    // }
}
