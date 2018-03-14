/*
 * Guangyao Li
 * 2017/11/08
 * lgy87@foxmail.com
 */
/*
 * import propTypes from "..."
 * const MyComponent = props => <div {...props}>{props.children}</div>
 *
 * MyComponent.propTypes = propTypes({
 *   id: "string",
 *   isChild: "bool",
 *   isParent: "bool.",
 * })
 *
 * =>
 *
 * MyComponent.propTypes = {
 *   id: PropTypes.string,
 *   isChild: PropTypes.bool,
 *   isParent: PropTypes.bool.isRequired,
 * }
 */
import PropTypes from 'prop-types'
import _ from "lodash/fp"
import addUnitTestTo_ from "../addUnitTestTo_"

const isRequired = r.invoker(1, "endsWith")(".")
const getRequired = r.prop("isRequired")
const initial = r.invoker(2, "slice")(0, -1)
const isArray = r.is(Array)
const isFunction = r.is(Function)
const isString = r.is(String)

const iteratee = value => r.cond([
    [isOneOfType, oneOfType],
    [isArrayOf, arrayOf],
    [isObjectOf, objectOf],
    [isInstanceOf, instanceOf],
    [isShape, shape],
    [isOneOf, oneOf],
    [isArrayOfShorthand, arrayOfShorthand],
    [isObjectOfShorthand, objectOfShorthand],
    [isFunction, customProp],
    [isString, defaults],
    [r.T, exception],
  ])(value)

export default r.map(iteratee)

const is = type => r.allPass([
  isArray,
  r.compose(
    r.invoker(1, "startsWith")(type),
    r.nth(0),
  ),
])
const isOneOfType = is("oneOfType")
const isOneOf = is("oneOf")
const isObjectOf = is("objectOf")
const isArrayOf = is("arrayOf")
const isInstanceOf = is("instanceOf")
const isShape = is("shape")

const arrayOfPattern = /\[\s*(['"]?)(\w+)\1\s*\]/
const objectOfPattern = /\{\s*(['"]?)(\w+)\1\s*\}/
const isShorthand = pattern => pattern.test.bind(pattern)
const isArrayOfShorthand = isShorthand(arrayOfPattern)
const isObjectOfShorthand = isShorthand(objectOfPattern)

const parse = value => {
  const isRequired_ = isRequired(value)
  const type = isRequired_ ? initial(value) : value

  return {isRequired_, type}
}

/* if rule is [isRequired], then return [object.isRequired] */
const polyfillRequired = isRequired => object => (
  isRequired
    ? getRequired(object)
    : object
)

/* for UNIT TEST only! */
const buildFieldsForUnitTest = (fn_, args_, isRequired_) => ({fn_, args_, isRequired_})

const buildResult = (fn_, args_, isRequired_) => {
  return r.compose(
    addUnitTestTo_(buildFieldsForUnitTest(fn_, args_, isRequired_)),
    polyfillRequired(isRequired_),
    fn_,
  )(args_)
}
function exception (value) {
  throw `Invalid type [${value}]`
}

function oneOf ([name, ...args_]) {
  const {isRequired_, type} = parse(name)
  const fn_ = PropTypes[type]

  return buildResult(fn_, args_, isRequired_)
}
function arrayOf ([name, elementType]) {
  const {isRequired_, type} = parse(name)
  const fn_ = PropTypes[type]

  const args_ = isFunction(elementType)
    ? elementType
    : PropTypes[elementType]

  return buildResult(fn_, args_, isRequired_)
}
function objectOf ([name, elementType]) {
  const {isRequired_, type} = parse(name)
  const fn_ = PropTypes[type]
  const args_ = PropTypes[elementType]

  return buildResult(fn_, args_, isRequired_)
}
function xOfShorthand (value, pattern, type) {
  const isRequired_ = isRequired(value)
  const elementType = value.match(pattern)[2]
  const fn_ = PropTypes[type]
  const args_ = PropTypes[elementType]

  return buildResult(fn_, args_, isRequired_)
}
function arrayOfShorthand (value) {
  return xOfShorthand(value, arrayOfPattern, "arrayOf")
}
function objectOfShorthand (value) {
  return xOfShorthand(value, objectOfPattern, "objectOf")
}
function instanceOf ([name, Class]) {
  const {isRequired_, type} = parse(name)
  const fn_ = PropTypes[type]
  const args_ = Class

  return buildResult(fn_, args_, isRequired_)
}
function oneOfType ([name, ...args]) {
  const {isRequired_, type} = parse(name)
  const fn_ = PropTypes[type]

  const args_ = args.map(arg => (
    isArray(arg)
      ? iteratee(arg)
      : PropTypes[_.trimChars(".")(arg)]
  ))
  const result = fn_(args_)

  return addUnitTestTo_(buildFieldsForUnitTest(fn_, args_, isRequired_))(result)
}
function shape ([name, args_]) {
  const {isRequired_, type} = parse(name)
  const fn_ = PropTypes[type]
  const unitTestFields = buildFieldsForUnitTest(fn_, args_, isRequired_)

  return r.compose(
    addUnitTestTo_(unitTestFields),
    r.map(iteratee),
  )(args_)
}
function customProp (value) {
  return value
}
function defaults (value) {
  const replaceLastPeriodWithIsRequired = r.replace(/\.$/)(".isRequired")

  const result = r.compose(
    r.path(r.__, PropTypes),
    r.split("."),
    replaceLastPeriodWithIsRequired,
  )(value)

  if (! result) {
    throw new Error("Not invalid!")
  }
  return result
}
