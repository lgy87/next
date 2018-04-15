/*
 * Guangyao Li
 * 2018/03/20
 * lgy87@foxmail.com
 */
import r from "ramda"
import rc from "recompose"
import size from "enums/size"
import omitProps from "utils/omitProps"
import createLayout from "./createLayout"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"

const Container = createLayout("container")

export default
r.pipe(
  omitProps(size),
  rc.withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat("grid-"),
      size,
    )
  ),
)(Container)
