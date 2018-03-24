import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import {concat} from "ramda"

const baseClassName = "loading"
const size = ["sm", "lg"]

export default
component
  .of("div")
  .omitProps(size)
  .withProps(
    concatToClassNameIfAllPropsTrue(
      concat(`${baseClassName}-`),
      size,
    )
  )
  .withProps({
    className: baseClassName,
  })
  .init()