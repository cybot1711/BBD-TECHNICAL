import { testFunc } from "../services"

describe("This is a simple test", () => {
    test("Check the sampleFunction function", () => {
        expect(testFunc("hello")).toEqual("hellohello");
    });
});