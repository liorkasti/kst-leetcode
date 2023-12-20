const rewire = require("rewire")
const maxNumberOfBalloons = rewire("../maxNumberOfBalloons")
const freq = maxNumberOfBalloons.__get__("freq")
// @ponicode
describe("freq", () => {
    test("0", () => {
        let result = freq(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = freq(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = freq(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = freq(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = freq(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = freq(Infinity)
        expect(result).toMatchSnapshot()
    })
})
