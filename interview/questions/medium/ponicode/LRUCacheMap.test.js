const rewire = require("rewire")
const LRUCacheMap = rewire("../LRUCacheMap")
const LRUCache = LRUCacheMap.__get__("LRUCache")
// @ponicode
describe("LRUCache.put", () => {
    let inst

    beforeEach(() => {
        inst = new LRUCache()
    })

    test("0", () => {
        let result = inst.put("elio@example.com", "elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = inst.put("Elio", "Elio")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = inst.put("Dillenberg", "Dillenberg")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = inst.put("Elio", "elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = inst.put("Dillenberg", "Elio")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = inst.put("", "")
        expect(result).toMatchSnapshot()
    })
})
