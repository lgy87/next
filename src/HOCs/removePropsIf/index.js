/*
 * config: {
 *   pred: (...args) => boolean,
 * }
 */
function removePropsIf ({
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