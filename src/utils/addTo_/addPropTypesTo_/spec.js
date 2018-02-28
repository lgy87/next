/*
 * Guangyao Li
 * 2017/11/13
 * 759646703@qq.com
 */
import PropTypes from "prop-types"
import mergeToPropTypes_ from "./merge_"
import propTypes from "./impl"
import addPropTypesTo_ from "./index"

describe("propTypesr", () => {
  describe("merge_", () => {
    it("mergeToPropTypes_", () => {
      const object = {
        foo: 42,
        propTypes: {
          bar: "bool.",
        }
      }

      const bar = {
        baz: "number",
        qux: "string.",
      }

      const result = mergeToPropTypes_(bar)(object)

      expect(result).toBe(object)
      expect(result)
        .toEqual({
          foo: 42,
          propTypes: {
            bar: "bool.",
            baz: "number",
            qux: "string.",
          },
        })
    })
    it("mergeToPropTypes_.ignore.if.exists", () => {
      const object = {
        foo: 42,
        propTypes: {
          bar: "bool.",
        }
      }

      const bar = {
        bar: "number",
        qux: "string.",
      }

      const result = mergeToPropTypes_(bar)(object)

      expect(result).toBe(object)
      expect(result)
        .toEqual({
          foo: 42,
          propTypes: {
            bar: "bool.",
            qux: "string.",
          },
        })
    })
  })
  describe("addPropTypesTo_", () => {
    it("basic", () => {
      const rules = {
        optionalArray: "array",
        optionalBool: "bool",
        optionalElement: "element",
        optionalFunc: "func",
        optionalNumber: "number",
        optionalObject: "object",
        optionalString: "string",
        optionalSymbol: "symbol",
        optionalNode: "node",
        requiredAny: "any",
      }

      expect(propTypes(rules)).toEqual({
        optionalArray: PropTypes.array,
        optionalBool: PropTypes.bool,
        optionalElement: PropTypes.element,
        optionalFunc: PropTypes.func,
        optionalNumber: PropTypes.number,
        optionalObject: PropTypes.object,
        optionalString: PropTypes.string,
        optionalSymbol: PropTypes.symbol,
        optionalNode: PropTypes.node,
        requiredAny: PropTypes.any,
      })
    })
    it("basic.", () => {
      const rules = {
        requiredArray: "array.",
        requiredBool: "bool.",
        requiredElement: "element.",
        requiredFunc: "func.",
        requiredNumber: "number.",
        requiredObject: "object.",
        requiredString: "string.",
        requiredSymbol: "symbol.",
        requiredNode: "node.",
        requiredAny: "any.",
      }

      expect(propTypes(rules)).toEqual({
        requiredArray: PropTypes.array.isRequired,
        requiredBool: PropTypes.bool.isRequired,
        requiredElement: PropTypes.element.isRequired,
        requiredFunc: PropTypes.func.isRequired,
        requiredNumber: PropTypes.number.isRequired,
        requiredObject: PropTypes.object.isRequired,
        requiredString: PropTypes.string.isRequired,
        requiredSymbol: PropTypes.symbol.isRequired,
        requiredNode: PropTypes.node.isRequired,
        requiredAny: PropTypes.any.isRequired,
      })
    })
    it("oneOf", () => {
      const types = ["Photo", "Message"]
      const result = propTypes({
        optionalEnum: ["oneOf", ...types],
      })
      const {optionalEnum: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.oneOf)
      expect(ut.args_).toEqual(types)
      expect(ut.isRequired_).toBeFalsy()
    })
    it("oneOf.", () => {
      const types = ["Photo", "Message"]
      const result = propTypes({
        requiredEnum: ["oneOf.", ...types],
      })
      const {requiredEnum: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.oneOf)
      expect(ut.args_).toEqual(types)
      expect(ut.isRequired_).toBeTruthy()
    })
    it("arrayOf", () => {
      const type = "number"
      const result = propTypes({
        optionalArrayOf: ["arrayOf", type],
      })
      const {optionalArrayOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.arrayOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeFalsy()
    })
    it("arrayOf.", () => {
      const type = "number"
      const result = propTypes({
        requiredArrayOf: ["arrayOf.", type],
      })
      const {requiredArrayOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.arrayOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeTruthy()
    })
    it("arrayOfShorthand", () => {
      const type = "number"
      const result = propTypes({
        requiredArrayOf: `["${type}"]`
      })
      const {requiredArrayOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.arrayOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeFalsy()
    })
    it("arrayOfShorthand.", () => {
      const type = "number"
      const result = propTypes({
        requiredArrayOf: `[${type}].`
      })
      const {requiredArrayOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.arrayOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeTruthy()
    })
    it("objectOf", () => {
      const type = "number"
      const result = propTypes({
        optionalObjectOf: ["objectOf", type],
      })
      const {optionalObjectOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.objectOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeFalsy()
    })
    it("objectOf.", () => {
      const type = "number"
      const result = propTypes({
        optionalObjectOf: ["objectOf.", type],
      })
      const {optionalObjectOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.objectOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeTruthy()
    })
    it("objectOfShorthand", () => {
      const type = "number"
      const result = propTypes({
        requiredArrayOf: `{"${type}"}`
      })
      const {requiredArrayOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.objectOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeFalsy()
    })
    it("objectOfShorthand.", () => {
      const type = "number"
      const result = propTypes({
        requiredArrayOf: `{${type}}.`
      })
      const {requiredArrayOf: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.objectOf)
      expect(ut.args_).toEqual(PropTypes[type])
      expect(ut.isRequired_).toBeTruthy()
    })
    it("instanceOf", () => {
      const Class = () => {}
      const result = propTypes({
        optionalMessage: ["instanceOf", Class],
      })
      const {optionalMessage: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.instanceOf)
      expect(ut.args_).toBe(Class)
      expect(ut.isRequired_).toBeFalsy()
    })
    it("instanceOf.", () => {
      const Class = () => {}
      const result = propTypes({
        requiredMessage: ["instanceOf.", Class],
      })
      const {requiredMessage: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.instanceOf)
      expect(ut.args_).toBe(Class)
      expect(ut.isRequired_).toBeTruthy()
    })
    it("oneOfType-instanceOf.", () => {
      const Class = () => {}
      const args = [
        "string",
        "number",
        [
          "instanceOf.",
          Class,
        ],
      ]
      const result = propTypes({
        optionalUnion: [
          "oneOfType",
          ...args,
        ]
      })

      const {optionalUnion: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.oneOfType)
      expect(ut.args_[0]).toBe(PropTypes[args[0]])
      expect(ut.args_[1]).toBe(PropTypes[args[1]])
      expect(ut.isRequired_).toBeFalsy()

      const instanceOf = ut.args_[2]
      const {__UNIT_TEST__: ut2} = instanceOf
      expect(ut2.fn_).toBe(PropTypes.instanceOf)
      expect(ut2.args_).toEqual(Class)
      expect(ut2.isRequired_).toBeTruthy()
    })
    it("oneOfType.-instanceOf", () => {
      const Class = () => {}
      const args = [
        "string",
        "number",
        [
          "instanceOf",
          Class,
        ],
      ]
      const result = propTypes({
        optionalUnion: [
          "oneOfType.",
          ...args,
        ]
      })

      /*
    const {optionalUnion} = result
    const {__UNIT_TEST__: ut} = optionalUnion
    expect(ut.fn_).toBe(PropTypes.oneOfType)
    expect(ut.args_).toEqual(args)
    expect(ut.isRequired_).toBeTruthy()

    const instanceOf = optionalUnion[2]
    const {__UNIT_TEST__: ut2} = instanceOf
    expect(ut2.fn_).toBe(PropTypes.instanceOf)
    expect(ut2.args_).toEqual(Class)
    expect(ut2.isRequired_).toBeFalsy()
    */
    })
    it("shape", () => {
      const Class = () => {}
      const args = {
        color: "string",
        fontSize: "number",
      }
      const result = propTypes({
        optionalObjectWithShape: [
          "shape",
          args,
        ]
      })

      const {optionalObjectWithShape: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.shape)
      expect(ut.args_).toEqual(args)
      expect(ut.isRequired_).toBeFalsy()
    })
    it("shape.", () => {
      const Class = () => {}
      const args = {
        color: "string",
        fontSize: "number",
      }
      const result = propTypes({
        optionalObjectWithShape: [
          "shape.",
          args,
        ]
      })

      const {optionalObjectWithShape: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.shape)
      expect(ut.args_).toEqual(args)
      expect(ut.isRequired_).toBeTruthy()
    })
    it("customProp", () => {
      const args = function (props, propName, componentName) {}

      const result = propTypes({
        customProp: args
      })

      expect(result.customProp).toBe(args)
    })
    it("customArrayProp", () => {
      const args = function (props, propName, componentName) {}

      const result = propTypes({
        customArrayProp: [
          "arrayOf",
          args,
        ]
      })

      const {customArrayProp: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.arrayOf)
      expect(ut.args_).toEqual(args)
      expect(ut.isRequired_).toBeFalsy()
    })
    it("customArrayProp.", () => {
      const args = function (props, propName, componentName) {}

      const result = propTypes({
        customArrayProp: [
          "arrayOf.",
          args,
        ]
      })

      const {customArrayProp: {__UNIT_TEST__: ut}} = result
      expect(ut.fn_).toBe(PropTypes.arrayOf)
      expect(ut.args_).toEqual(args)
      expect(ut.isRequired_).toBeTruthy()
    })
    it("throw an error", () => {
      const result = () => propTypes({
        exception: "i.am.invalid",
      })
      expect(result).toThrow(Error)
    })
    it("throw another error", () => {
      const result = () => propTypes({
        exception: ["i.am.an.invalid.type", "foo", "bar"],
      })
      expect(result).toThrow()
    })
    it("addPropTypesTo_", () => {
      const Component = () => {}

      Component.propTypes = propTypes({
        bar: "bool.",
      })

      const other = {
        baz: "number",
        qux: "string.",
      }

      const result = addPropTypesTo_(other)(Component)

      expect(result).toBe(Component)
      expect(result.propTypes)
        .toEqual({
          bar: PropTypes.bool.isRequired,
          baz: PropTypes.number,
          qux: PropTypes.string.isRequired,
        })
    })
    it("addPropTypesTo_.ignore.if.exists", () => {
      const Component = () => {}

      Component.propTypes = propTypes({
        bar: "bool.",
      })

      const other = {
        bar: "number",
        baz: "string.",
      }

      const result = addPropTypesTo_(other)(Component)

      expect(result).toBe(Component)
      expect(result.propTypes)
        .toEqual({
          bar: PropTypes.bool.isRequired,
          baz: PropTypes.string.isRequired,
        })
    })
  })
})


