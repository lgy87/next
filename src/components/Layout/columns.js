/*
 * Guangyao Li
 * 2018/03/20
 * lgy87@foxmail.com
 */
import r from "ramda"
import rc from "recompose"
import omitProps from "utils/omitProps"
import createLayout from "./createLayout"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"

const Columns = createLayout("columns")
const appearance = ["gapless", "oneline"]

export default
r.pipe(
  omitProps(appearance),
  rc.withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat("col-"),
      appearance,
    )
  ),
  rc.setDisplayName("Columns"),
)(Columns)
