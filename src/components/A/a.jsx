// const A = props => <span {...props} />
import component from "utils/component"
import propTypes from "utils/propTypes"
import thread from "utils/thread"

export default
component
  .of("a")
  .mapProps(thread(["children", "text"]))
  .defaultProps({ href: "javascript:;" })
  .setPropTypes(propTypes({
    text: "string",
    href: "string",
  }))
  .init()

