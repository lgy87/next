/*
 * Guangyao Li
 * 2018/03/20
 * lgy87@foxmail.com
 */
import createLayout from "./createLayout"
import {pipe, concat, omit} from "ramda"
import {
  mapProps,
  withProps,
} from "recompose"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import size from "enums/size"

const baseClassName = "grid"
const Container = createLayout("container")

const omitProps = pipe(omit, mapProps)

export default
pipe(
  omitProps(size),
  withProps(
    concatToClassNameIfAllPropsTrue(
      concat(`${baseClassName}-`),
      size,
    )
  ),
)(Container)
