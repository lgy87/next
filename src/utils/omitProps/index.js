import r from "ramda"
import rc from "recompose"

export default
r.compose(
  rc.mapProps,
  r.omit,
)
