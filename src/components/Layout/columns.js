/*
 * Guangyao Li
 * 2018/03/20
 * lgy87@foxmail.com
 */
import createLayout from "./createLayout"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import {
  concat,
} from "ramda"

const Columns = createLayout("columns")

const appearance = ["gapless", "oneline"]
const baseClassName = "col"

export default
r.compose(
  rc.omitProps(appearance),
  rc.withProps(
    concatToClassNameIfAllPropsTrue(
      concat(`${baseClassName}-`),
      appearance,
    )
  ),
  rc.setDisplayName("Columns"),
)(Columns)

