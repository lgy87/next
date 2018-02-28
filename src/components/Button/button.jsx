import {addPropTypesTo_} from "utils/addTo_"
import attachPropsIf from "HOCs/attachPropsIf"
import patchClassName from "HOCs/patchClassName"
import attachClassName from "HOCs/attachClassName"
import createPropTypesBy from "utils/createPropTypesBy"

const behavior = ["loading", "active", "circle"]
const appearance = ["primary", "link", "success", "error", "block", "action", "lg", "sm"]
const baseClassName = "btn"

function Button ({text, children, ...rest}) {
  return (
    <button {...rest}>
      {text || children}
    </button>
  )
}

export default r.pipe(
  addPropTypesTo_({
    ...createPropTypesBy(
      r.always("bool"),
      behavior.concat(appearance),
    ),
    text: "string",
    children: "node",
    className: "string",
    style: "object",
  }),
  attachClassName(baseClassName),
  patchClassName({
    list: appearance,
    transformer: r.concat(`${baseClassName}-`),
  }),
  patchClassName({
    list: behavior,
  }),
  attachPropsIf({
    pred: r.has("disabled"),
    attachment: {tabIndex: -1},
  }),
)(Button)
