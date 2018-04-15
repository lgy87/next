/*
 * Guangyao Li
 * 2017/11/13
 * lgy87@foxmail.com
 */
/*
 * eg. 在candidate中查找满足isNull 的 foo 中的 keys, 查找不到返回 []
 * const foo = {
 *   bar: true,
 *   baz: null,
 *   qux: 42,
 *   moo: undefined,
 *   mos: null,
 * }
 * const candidate = ["bar", "moo", "baz"]
 * const isNull = r.equals(null)
 * const result = findInBy(isNull)(candidate)(foo)
 *
 * => baz
 */
import r from "ramda"

function findInBy (pred, keysToFindIn, object) {
  return r.compose(
    r.intersection(keysToFindIn),
    r.keys,
    r.filter(pred),
  )(object)
}

export default r.curry(findInBy)
