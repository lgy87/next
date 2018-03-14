import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import propTypes from "utils/propTypes"
import createPropTypesBy from "utils/createPropTypesBy"
import thread from "utils/thread"

const appearance = ["primary", "secondary", "success", "warning", "error", "rounded"]
const baseClassName = "label"

export default
component
  .of("span")
  .omitProps(appearance)
  .withProps(thread(["children", "text"]))
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat(`${baseClassName}-`),
      appearance,
    )
  )
  .withProps({ className: baseClassName })
  .setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      appearance,
    ),
    text: "string",
    children: "node",
    className: "string",
    style: "object",
  }))
  .init()