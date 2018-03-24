import component from "utils/component"
import mandatory from "utils/mandatory"
import capitalize from "lodash/fp/capitalize"

export default
function createFormElement (
  tag = mandatory("tag"),
  className = mandatory("className"),
) {
  return component
    .of(tag)
    .defaultProps({
      className,
    })
    .setDisplayName(capitalize(tag))
    .init()
}
