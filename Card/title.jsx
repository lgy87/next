import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import propTypes from "utils/propTypes"
import createPropTypesBy from "utils/createPropTypesBy"
import thread from "utils/thread"

const headerLevels = 
  r.range(1, 7)
  |> r.map(String)
  |> r.map(r.concat("h"))

export default
component
  .of("div")
  .omitProps(headerLevels)
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.identity,
      headerLevels,
    )
  )
  .withProps(thread(["children", "text"]))
  .withProps({ className: "card-title" })
  .setDisplayName("CardTitle")
  .setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      headerLevels,
    ), 
  }))
  .init()