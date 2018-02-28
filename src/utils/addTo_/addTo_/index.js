/*
 * Guangyao Li
 * 2017/11/12
 * lgy87@foxmail.com
 */
/*
 * const foo = {}
 * const bar = addTo_(bar)(42)(foo)
 * =>
 * foo: {bar: 42}    // this function MUTATES the object
 * bar: {bar: 42}
 */
function addTo_(key, value, object) {
  object[key] = value
  return object
}

export default r.curry(addTo_)
