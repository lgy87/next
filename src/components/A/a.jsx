import component from "utils/component"
import propTypes from "utils/propTypes"
import thread from "utils/thread"
import tooltipMapper from "utils/tooltipMapper"

export default
component
  .of("a")
  .withProps(thread(["children", "text"]))
  .mapProps(tooltipMapper)
  .withProps(props => r.propEq("target", "_blank", props) && ({
    rel: "noopener noreferrer",
  }))
  .defaultProps({href: "javascript:;"})
  .setDisplayName("A")
  .setPropTypes(propTypes({
    text: "string",
    href: "string",
  }))
  .init()
