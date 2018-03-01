import findInBy from "utils/findInBy"
/*
 * config: {
 *   pred: (...args) => boolean,
 * }
 */
function removePropsIf ({
  list,
  pred = r.equals(true),
}, Component) {
  return function (props) {
    const found = findInBy(pred, list, props)
    const newProps = r.omit(found, props)
    
    return <Component {...newProps} />
  }
}

export default r.curry(removePropsIf)