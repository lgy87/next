import findInBy from "utils/findInBy"
/*
 * config: {
 *   pred: (value, key) => boolean
 *   list: [],
 * }
 */
function mapPropsIf ({
  list,
  pred = r.equals(true),
  transformer,
}, Component) {
  return function (props) {
    const filtered = findInBy(pred, list, props)
    const picked = r.pick(filtered, props)
    const transformed = Object.entries(picked)
      .reduce((accu, pair) => transformer(pair[1], pair[0]), {})
    
    const rest = r.omit(filtered, props)
    const newProps = {
      ...rest,
      ...transformed,
    }
    
    return <Component {...newProps} />
  }
}

export default r.curry(mapPropsIf)