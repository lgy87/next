import component from "utils/component"
import propTypes from "utils/propTypes"
import thread from "utils/thread"
import tooltipMapper from "utils/tooltipMapper"

const A =
component
  .of("a")
  .withProps(thread(["children", "text"]))
  .mapProps(tooltipMapper)
  .defaultProps({ href: "javascript:;" })
  .setDisplayName("A")
  .setPropTypes(propTypes({
    text: "string",
    href: "string",
  }))
  .init()

export default A