import component from "utils/component"
import thread from "utils/thread"

export default
component
  .of("option")
  .withProps(thread(["children", "text"]))
  .setDisplayName("Option")
  .init()