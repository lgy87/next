import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import concatToClassNameIf from "utils/concatToClassNameIf"
import propTypes from "utils/propTypes"
import createPropTypesBy from "utils/createPropTypesBy"
import thread from "utils/thread"

const behavior = ["loading", "active", "circle", "badge"]
const appearance = ["primary", "link", "success", "error", "block", "action", "lg", "sm"]
const baseClassName = "btn"

export default
component
  .of("button")
  .omitProps(appearance.concat(behavior))
  .withProps(thread(["children", "text"]))
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat(`${baseClassName}-`),
      appearance,
    )
  )
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.identity,
      behavior,
    )
  )
  .renameProp("badge", "data-badge")
  .withProps(
    concatToClassNameIf(
      "badge",
      r.has("badge"),
    )
  )
  .withProps(({disabled}) => disabled === true && ({tabIndex: -1}))
  .withProps({className: baseClassName})
  .setDisplayName("Button")
  .setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      behavior.concat(appearance),
    ),
    badge: ["oneOfType", "string", "number"],
    text: "string",
    children: "node",
    className: "string",
    style: "object",
  }))
  .init()