/*
 * Guangyao Li
 * 2018/03/22
 * lgy87@foxmail.com
 */
import r from "ramda"
import rc from "recompose"
import component from "utils/component"
import concatToClassNameBy from "utils/concatToClassNameBy"
import thread from "utils/thread"

const direction = ["left", "center", "right", "justify"]
const cases = ["lowercase", "uppercase", "capitalize"]
const weights = ["normal", "bold", "italic", "large"]
const behavior = ["ellipsis", "clip", "break"]

const concatText = r.concat("text-")

export default
r.pipe(
  component.ofTag,
  rc.withProps(concatToClassNameBy(concatText, "direction")),
  rc.withProps(concatToClassNameBy(concatText, "case")),
  rc.withProps(concatToClassNameBy(concatText, "weight")),
  rc.withProps(concatToClassNameBy(concatText, "behavior")),
  rc.withProps(thread(["children", "text"])),
)("div")
