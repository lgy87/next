/*
 * config: {
 *   pred: (...args) => boolean,
 *   list: [],
 * }
 */
function removePropsIf ({
  list,
  pred = r.equals(true),
}, Component) {
  return function (props) {
    const newProps = r.filter(
      r.complement(pred),
      props,
    )

    return <Component {...newProps} />
  }
}

export default r.curry(removePropsIf)