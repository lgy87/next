/*
 * config: {
 *   pred: (...args) => boolean,
 *   attachment: {...},
 * }
 */
function attachPropsIf ({
  pred,
  attachment,
}, Component) {
  return function (props) {
    const newProps = {
      ...props,
      ...(pred(props) ? attachment : {}),
    }

    return <Component {...newProps} />
  }
}

export default r.curry(attachPropsIf)