import r from "ramda"
import rc from "recompose"
import component from "utils/component"
import createFormElement from "./createFormElement"

export default
function createSwitchableElement ({
  name,
  type,
  className = type,
}) {
  const tag = "input"
  const Wrapper = createFormElement({tag: "label", className})
  const Element = rc.defaultProps({type})(component.ofTag(tag))
  const Icon = component.ofTagClass("i", "form-icon")

  return ({text, ...rest}) => {
    return (
      <Wrapper>
        <Element {...rest} />
        <Icon />{text}
      </Wrapper>
    )
  }
}

