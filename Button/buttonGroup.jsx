import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import propTypes from "utils/propTypes"
import createPropTypesBy from "utils/createPropTypesBy"

const appearance = ["block"]
const baseClassName = "btn-group"

export default
component
  .of("div")
  .omitProps(appearance)
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat(`${baseClassName}-`),
      appearance,
    ),
  )
  .withProps({className: baseClassName})
  .setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      appearance,
    ),
    children: "node",
    className: "string",
    style: "object",
  }))
  .init()