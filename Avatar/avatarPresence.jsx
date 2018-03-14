import createPropTypesBy from "utils/createPropTypesBy"
import component from "utils/component"
import propTypes from "utils/propTypes"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"

export const status = ["online", "busy", "away", "offline"]

export default
component
  .of("i")
  .omitProps(status)
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.identity,
      status,
    )
  )
  .withProps({className: "avatar-presence"})
  .setDisplayName("AvatarPresence")
  .setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      status,
    ),
    className: "string",
    style: "object"
  }))
  .init()
