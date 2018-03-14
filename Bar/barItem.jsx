// @flow
import component from "utils/component"
import tooltipMapper from "utils/tooltipMapper"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import propTypes from "utils/propTypes"
import thread from "utils/thread"
import mergePropsToStyle from "utils/mergePropsToStyle"

const behavior = ["tooltip"]
const baseClassName = "bar-item"

export default
component
  .of("div")
  .omitProps(behavior)
  .mapProps(tooltipMapper)
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.identity,
      behavior,
    )
  )
  .withProps(mergePropsToStyle(["background", "width", "color"]))
  .renameProps({
    bg: "background",
    value: "width",
    min: "aria-valuemin",
    max: "aria-valuemax",
  })
  .withProps(thread(["aria-valuenow", "now", "value"]))
  .withProps(thread(["children", "text", "value"]))
  .withProps({
    className: baseClassName,
    role: "progressbar"
  })
  .setDisplayName("BarItem")
  .setPropTypes(propTypes({
    tooltip: ["oneOfType", "string", "number"],
    value: "string",
    text: "string",
    bg: "string",
    color: "string",
    children: "node",
    className: "string",
    style: "object",
  }))
  .init()
 