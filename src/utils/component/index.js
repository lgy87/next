import mandatory from "utils/mandatory"
import r from "ramda"
import rc from "recompose"
import concatToClassName from "utils/concatToClassName"

export default {
  ofTag,
  ofTagClass: r.curryN(2, ofTagClass),
}

function ofTag (
  tag = mandatory("tag"),
) {
  return r.compose(
    rc.defaultProps({component: tag}),
    rc.componentFromProp,
  )("component")
}

function ofTagClass (
  tag = mandatory("tag"),
  className = mandatory("className"),
) {
  return r.compose(
    rc.withProps(
      concatToClassName(className),
    ),
    ofTag,
  )(tag)
}
