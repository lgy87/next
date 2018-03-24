import createElement from "utils/component/createElement"

export default
function createFormElement ({
  tag = "input",
  className = tag,
  type,
}) {
  const Element = createElement(
    tag,
    `form-${className}`,
  )

  return type
    ? rc.defaultProps({type})(Element)
    : Element
}