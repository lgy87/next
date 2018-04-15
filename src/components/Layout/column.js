/*
 * Guangyao Li
 * 2018/03/21
 * lgy87@foxmail.com
 */
import createLayout from "./createLayout"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import cx from "classnames"
import size from "enums/size"
import r from "ramda"
import omitProps from "utils/omitProps"
import rc from "recompose"

const oneToTwelve = r.range(1, 13).map(String)
const appearance = r.xprod(size, oneToTwelve).map(r.join("-"))
const margins = ["mx-auto", "ml-auto", "mr-auto"]
const fullAppearance = appearance.concat(oneToTwelve, margins).map(r.concat("col-"))

const Column = createLayout("column")

export default
r.pipe(
  omitProps(appearance.concat(fullAppearance, margins)),
  rc.withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat("col-"),
      appearance.concat(margins),
    )
  ),
  rc.withProps(
    concatToClassNameIfAllPropsTrue(
      r.identity,
      fullAppearance,
    )
  ),
  rc.setDisplayName("Column"),
)(Column)
