/*
 * Guangyao Li
 * 2017/11/12
 * lgy87@foxmail.com
 */
import addDefaultProps_ from "./index"

describe("addDefaultPropsTo", () => {
  it("addDefaultPropsTo", () => {
    const Component = () => {}
    const defaultProps = {
      foo: 42,
      bar: new Date(),
      baz: "baz",
    }
    const defaultProps1 = {
      ...defaultProps,
      haha: "99",
    }

    const result = addDefaultProps_(defaultProps)(Component)

    expect(result).toBe(Component)
    expect(result.defaultProps)
      .toEqual(defaultProps)
  })
})
