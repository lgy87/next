import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import propTypes from "utils/propTypes"
import createPropTypesBy from "utils/createPropTypesBy"
import thread from "utils/thread"

const appearance = ["gray"]

export default
component
  .of("div")
  .omitProps(appearance)
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat("text-"),
      appearance,
    )
  )
  .withProps(thread(["children", "text"]))
  .withProps({className: "card-subtitle"})
  .setDisplayName("CardSubtitle")
  .setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      appearance,
    ), 
  }))
  .init()