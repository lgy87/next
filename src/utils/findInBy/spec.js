/*
 * Guangyao Li
 * 2017/11/13
 * lgy87@foxmail.com
 */
import findFirstInBy from "./index"

const isTrue = r.equals(true)
describe("findFirstInBy", () => {
  it("findFirstTruthyIn", () => {
    const keys = ["foo", "bar", "baz", "moo"]
    const object = {
      foo: false,
      bar: null,
      baz: 42,
      qux: true,
      moo: "true",
    }

    const findFirstTruthyIn = findFirstInBy(Boolean)
    expect(findFirstTruthyIn(keys)(object))
      .toBe("moo")
  })
  it("findFirstTruthyExplicitIn", () => {
    const keys = ["foo", "bar", "baz", "moo"]
    const object = {
      foo: false,
      bar: null,
      baz: 42,
      qux: true,
      moo: "true",
    }

    const findFirstTruthyExplicitIn = findFirstInBy(isTrue)
    expect(findFirstTruthyExplicitIn(keys)(object))
      .toBe("")
  })
  it("findFirstNumeric", () => {
    const keys = ["foo", "bar", "baz", "moo"]
    const object = {
      foo: false,
      bar: null,
      baz: 42,
      qux: true,
      moo: "true",
    }

    const findFirstNumericIn = findFirstInBy(r.is(Number))
    expect(findFirstNumericIn(keys)(object))
      .toBe("baz")
  })
})
