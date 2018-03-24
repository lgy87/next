/*
 * Guangyao Li
 * 2018/03/21
 * lgy87@foxmail.com
 */
import component from "utils/component"
import createLayout from "./createLayout"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import cx from "classnames"
import size from "enums/size"
import {
  concat,
  pipe,
  identity,
  map,
  range,
  xprod,
  join,
} from "ramda"

const baseClassName = "column"
const oneToTwelve = range(1, 13).map(String)
const appearance = xprod(size, oneToTwelve).map(join("-"))
const margins = ["mx-auto", "ml-auto", "mr-auto"]
const fullAppearance = appearance.concat(oneToTwelve, margins).map(concat("col-"))

export default
component
  .of("div")
  .omitProps(appearance.concat(fullAppearance, margins))
  .withProps(
    concatToClassNameIfAllPropsTrue(
      concat("col-"),
      appearance.concat(margins),
    )
  )
  .withProps(
    concatToClassNameIfAllPropsTrue(
      identity,
      fullAppearance,
    )
  )
  .withProps(({className}) => ({
    className: cx(
      baseClassName,
      className,
    ),
  }))
  .setDisplayName("Column")
  .init()