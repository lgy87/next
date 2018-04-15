import r from "ramda"

function concatToClassNameIf (klass, pred, props) {
  return {
    ...props,
    className: cx(
      {
        [klass]: pred(props)
      },
      props.className,
    ),
  }
}

export default
r.curry(concatToClassNameIf)
