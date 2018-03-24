/*
 * Guangyao Li
 * 2018/03/22
 * lgy87@foxmail.com
 */
import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import {
  concat,
} from "ramda"


const baseClassName = "text"
const direction = ["left", "center", "right", "justify"]
const cases = ["lowercase", "uppercase", "capitalize"]
const weights = ["normal", "bold", "italic", "large"]
const behavior = ["ellipsis", "clip", "break"]

export default
component
  .of("div")
  .omitProps(direction.concat(cases, weights, behavior))
  .withProps(
    concatToClassNameIfAllPropsTrue(
      concat(`${baseClassName}-`),
      direction.concat(cases, weights, behavior),
    )
  )
  .init()
