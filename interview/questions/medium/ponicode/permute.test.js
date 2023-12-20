const rewire = require("rewire")
const permuteFile = rewire("../permute")
const permute = permuteFile.__get__("permute")
// @ponicode
describe("permute", () => {
    test("0", () => {
        let result = permute({ length: 16 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = permute({ length: 256 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = permute({ length: 10 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = permute({ length: 32 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = permute({ length: 64 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = permute({ length: NaN })
        expect(result).toMatchSnapshot()
    })
})
