import { AsyncTest, Expect, Test, TestCase, TestFixture } from "alsatian";
import { client } from "../lib/index";

@TestFixture("client fix")
export class SetOfTests {
    /***************************************************************************************************************************************************** */
    @TestCase([])
    public async isArray(input: any) {
        Expect(client.isArray(input)).toBe(true);
    }

    @TestCase("")
    public async isString(input: any) {
        Expect(client.isString(input)).toBe(true);
    }
    /***************************************************************************************************************************************************** */
    @TestCase("18071996467")
    public async checkPhone(phone: string) {
        Expect(client.checkPhone(phone)).toBe(true);
    }

    @TestCase("18468289@qq.com")
    public async checkEmail(email: string) {
        Expect(client.checkEmail(email)).toBe(true);
    }
    /***************************************************************************************************************************************************** */
    @TestCase(5)
    public async randomStr(length: number) {
        Expect(client.randomStr(length).length).toBe(length);
    }

    @TestCase(5)
    public async randomNumStr(length: number) {
        Expect(client.randomNumStr(length).length).toBe(length);
    }
    /***************************************************************************************************************************************************** */
    @TestCase(
        [
            [1, 2, 3],
            [2, 3, 4]
        ],
        [1, 2, 3, 4]
    )
    @TestCase([[1, 2, 3]], [1, 2, 3])
    public async arrayUnionMany(input: Array<Array<any>>, equal: any) {
        Expect(client.arrayUnionMany(input)).toEqual(equal);
    }

    @TestCase(
        [
            [1, 2, 3],
            [2, 3, 4]
        ],
        [2, 3]
    )
    @TestCase([[1, 2, 3]], [1, 2, 3])
    @TestCase(
        [
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 5]
        ],
        [3]
    )
    public async arrayIntersectionMany(input: Array<Array<any>>, equal: any) {
        Expect(client.arrayIntersectionMany(input)).toEqual(equal);
    }

    @TestCase([1, 2, 3], [2, 3, 4], [2, 3])
    @TestCase([1, 2, 3, 5], [2, 3, 4], [2, 3])
    public async arrayIntersectionBy2(input1: Array<any>, input2: Array<any>, equal: any) {
        Expect(client.arrayIntersectionBy2(input1, input2)).toEqual(equal);
    }

    @TestCase([1, 2, [2, 3, [4, 5]]])
    public async arrayFlatten(input: Array<any>) {
        Expect(client.arrayFlatten(input)).toEqual([1, 2, 2, 3, 4, 5]);
    }
    /***************************************************************************************************************************************************** */
    @TestCase("\\", "\\")
    @TestCase("?", "?")
    @TestCase("/", "/")
    @TestCase("a?", "a?")
    @TestCase("]", "]")
    @TestCase("{0}", "{0}")
    @TestCase("*", "*")
    public async regGetString(input: string, equal: any) {
        Expect(new RegExp(client.regGetString(input)).test(equal)).toEqual(true);
        // Expect(client.getRegString(input)).toEqual(equal);
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
