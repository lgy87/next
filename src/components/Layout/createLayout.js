import component from "utils/component"
import concatToClassName from "utils/concatToClassName"
import {T} from "ramda"

export default
function createLayout (name) {
  return component
    .of("div")
    .withProps(concatToClassName(name))
    .init()
}
