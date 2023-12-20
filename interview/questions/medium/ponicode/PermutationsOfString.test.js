const rewire = require("rewire")
const PermutationsOfString = rewire("../PermutationsOfString")
const checkInclusion = PermutationsOfString.__get__("checkInclusion")
// @ponicode
describe("checkInclusion", () => {
    test("0", () => {
        let param1 = [[-100, -100, 100, 0], [1, 1, 100, 0], [-5.48, -100, 0, -5.48], [-5.48, 0, 100, 0]]
        let result = checkInclusion(param1, { length: 256, charCodeAt: () => 252 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1 = [[100, 1, 100, -100], [-5.48, 1, 0, 1], [100, 1, 1, 100], [0, 0, 0, 100]]
        let result = checkInclusion(param1, { length: 256, charCodeAt: () => 143 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1 = [[100, 0, -100, -100], [100, 1, -5.48, 1], [0, 1, -100, 1], [-5.48, 0, -5.48, -100]]
        let result = checkInclusion(param1, { length: 10, charCodeAt: () => 250 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1 = [[0, -5.48, -100, 0], [0, 0, 0, 100], [1, 100, -5.48, -5.48], [0, 100, -5.48, -100]]
        let result = checkInclusion(param1, { length: 10, charCodeAt: () => 164 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1 = [[-100, 100, -5.48, 100], [-5.48, 100, -100, 1], [-5.48, 0, 1, 0], [100, -5.48, 100, -100]]
        let result = checkInclusion(param1, { length: 256, charCodeAt: () => 164 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = checkInclusion([], { length: NaN, charCodeAt: () => NaN })
        expect(result).toMatchSnapshot()
    })
})
