import component from "utils/component"
import propTypes from "utils/propTypes"
import thread from "utils/thread"

const baseClassName = "badge"

export default
component
  .of("span")
  .withProps(thread(["children", "text"]))
  .renameProp("value", "data-badge")
  .withProps({ className: baseClassName })
  .setDisplayName("Badge")
  .setPropTypes(propTypes({
    className: "string",
    style: "object",
    text: "string",
    children: "node",
    value: ["oneOfType", "string", "number"],
  }))
  .init()