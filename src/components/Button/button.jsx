import {addPropTypesTo_} from "utils/addTo_"
import attachPropsIf from "HOCs/attachPropsIf"
import patchClassName from "HOCs/patchClassName"
import removePropsIf from "HOCs/removePropsIf"
import attachClassName from "HOCs/attachClassName"
import createPropTypesBy from "utils/createPropTypesBy"
import mapPropsIf from "HOCs/mapPropsIf"

const behavior = ["loading", "active", "circle", "badge"]
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
    badge: ["oneOfType", "string", "number", "bool"],
    badgeValue: ["oneOfType", "string", "number"],
    text: "string",
    children: "node",
    className: "string",
    style: "object",
  }),  
  removePropsIf({
    list: behavior.concat(appearance),
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
  mapPropsIf({
    list: ["badgeValue"],
    pred: r.T,
    transformer: value => ({"data-badge": value})
  }),
  mapPropsIf({
    list: ["badge"],
    pred: r.anyPass([r.is(Number), r.is(String)]),
    transformer: value => ({
      badge: true,
      "data-badge": value,
    })
  }),
)(Button)