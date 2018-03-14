/*
 * Guangyao Li
 * 2017/11/13
 * lgy87@foxmail.com
 */
import addUnitTestTo_ from "./index"

describe("addUnitTestTo", () => {
  it("addUnitTestTo", () => {
    const object = {foo: 42}

    const bar = {
      baz: "number",
      qux: "string.",
    }

    const result = addUnitTestTo_(bar)(object)

    expect(result).toBe(object)
    expect(result)
      .toEqual({
        foo: 42,
        __UNIT_TEST__: bar,
      })
  })
})
