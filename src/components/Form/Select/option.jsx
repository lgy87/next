import rc from "recompose"
import component from "utils/component"
import thread from "utils/thread"

const Option = component.ofTag("option")

export default
rc.compose(
  rc.withProps(thread(["children", "text"])),
  rc.setDisplayName("Option"),
)(Option)
