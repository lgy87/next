import {addPropTypesTo_} from "utils/addTo_"
import createPropTypesBy from "utils/createPropTypesBy"
import removePropsIf from "HOCs/removePropsIf"
import attachClassName from "HOCs/attachClassName"
import patchClassName from "HOCs/patchClassName"

export const status = ["online", "busy", "away", "offline"]

const AvatarPresence = props => <i {...props} />

export default r.pipe(
  addPropTypesTo_({
    ...createPropTypesBy(
      r.always("bool"),
      status,
    ),
    className: "string",
    style: "object",
  }),  
  removePropsIf({
    list: status,
    pred: r.T,
  }),
  attachClassName("avatar-presence"),
  patchClassName({
    list: status,
  }),
)(AvatarPresence)
