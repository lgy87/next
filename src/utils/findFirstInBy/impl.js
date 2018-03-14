/*
 * Guangyao Li
 * 2017/11/13
 * lgy87@foxmail.com
 */
/*
 * eg. 在candidate中查找满足isNull 的 foo 中的最后一个key, 查找不到返回“”
 * const foo = {
 *   bar: true,
 *   baz: null,
 *   qux: 42,
 *   moo: undefined,
 *   mos: null,
 * }
 * const candidate = ["bar", "moo", "baz"]
 * const isNull = equals(null)
 * const result = findFirstInBy(isNull)(candidate)(foo)
 *
 * => baz
 */
import findInBy from "utils/findInBy"

function findFirstInBy (pred, keysToFindIn, object) {
  return r.compose(
    r.head,
    findInBy(pred, keysToFindIn),
  )(object)
}

export default r.curry(findFirstInBy)