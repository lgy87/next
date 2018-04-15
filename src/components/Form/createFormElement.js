import r from "ramda"
import rc from "recompose"
import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"

export default
function createFormElement ({
  tag = "input",
  className = tag,
  type,
}) {
  const size = ["sm", "lg"]
  const Element = component.ofTagClass(tag, `form-${className}`)

  return rc.compose(
    rc.withProps(
      concatToClassNameIfAllPropsTrue(
        r.concat(`${tag}-`),
        size,
      ),
    ),
  )(Element)

  return type
    ? rc.defaultProps({type})(Element)
    : Element
}
