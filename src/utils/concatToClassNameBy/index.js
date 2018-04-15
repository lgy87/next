import r from "ramda"

function concatToClassNameBy (pred, key, props) {
  if (props[key]) {
    return {
      className: cx([
        pred(props[key]),
        props.className,
      ]),
    }
  }
}

export default
r.curry(concatToClassNameBy)
