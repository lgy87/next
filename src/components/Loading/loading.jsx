import r from "ramda"
import rc from "recompose"
import component from "utils/component"
import concatToClassNameBy from "utils/concatToClassNameBy"

const size = ["sm", "lg"]
const concatLoading = r.concat("loading-")

export default
r.compose(
  rc.withProps(concatToClassNameBy(concatLoading, "size")),
  component.ofTagClass,
)("div", "loading")
