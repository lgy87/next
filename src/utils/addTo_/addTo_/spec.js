/*
 * Guangyao Li
 * 2017/11/12
 * lgy87@foxmail.com
 */
import addTo_ from "./index"

describe("addTo_", () => {
  it("addTo_", () => {
    const object = {foo: 42}

    const bar = {
      baz: "baz",
    }

    const result = addTo_("bar")(bar)(object)

    expect(result)
      .toEqual({
        foo: 42,
        bar: {
          baz: "baz",
        },
      })
    expect(result === object).toBeTruthy()
  })
})
