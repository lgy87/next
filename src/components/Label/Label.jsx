import {addPropTypesTo_} from "utils/addTo_"
import patchClassName from "HOCs/patchClassName"
import attachClassName from "HOCs/attachClassName"
import createPropTypesBy from "utils/createPropTypesBy"

const appearance = ["primary", "secondary", "success", "warning", "error", "rounded"]
const baseClassName = "label"

function Label ({text, children, ...rest}) {
  return (
    <span {...rest}>
      {text || children}
    </span>
  )
}

export default r.pipe(
  addPropTypesTo_({
    ...createPropTypesBy(
      r.always("bool"),
      appearance,
    ),
    className: "string",
    style: "object",
  }),
  attachClassName(baseClassName),
  patchClassName({
    list: appearance,
    transformer: r.concat(`${baseClassName}-`),
  })
)(Label)
