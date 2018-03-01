import {addPropTypesTo_} from "utils/addTo_"
import attachClassName from "HOCs/attachClassName"
const baseClassName = "badge"

function Badge ({value, text, children, ...rest}) {
  return (
    <span {...rest} data-badge={value}>
      {text || children}
    </span>
  )
}

export default r.pipe(
  addPropTypesTo_({
    className: "string",
    style: "object",
    text: "string",
    children: "node",
    value: "string",
  }),
  attachClassName(baseClassName),
)(Badge)
