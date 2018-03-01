import {addPropTypesTo_} from "utils/addTo_"
import patchClassName from "HOCs/patchClassName"
import removePropsIf from "HOCs/removePropsIf"
import attachClassName from "HOCs/attachClassName"
import createPropTypesBy from "utils/createPropTypesBy"

const appearance = ["block"]
const baseClassName = "btn-group"

const ButtonGroup = props => <div {...props} />

export default r.pipe(
  addPropTypesTo_({
    ...createPropTypesBy(
      r.always("bool"),
      appearance,
    ),
    text: "string",
    children: "node",
    className: "string",
    style: "object",
  }),
  removePropsIf({
    list: appearance,
  }),
  attachClassName(baseClassName),
  patchClassName({
    list: appearance,
    transformer: r.concat(`${baseClassName}-`),
  }),
)(ButtonGroup)
