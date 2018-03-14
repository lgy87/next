import component from "utils/component"
import thread from "utils/thread"

export default function createBlock (name) {
  return component
    .of("div")
    .withProps(thread(["children", "text"]))
    .withProps({className: `card-${name}`})
    .init()
}
