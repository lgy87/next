/*
 * Guangyao Li
 * 2018/04/02
 * lgy87@foxmail.com
 */
import r from "ramda"
import rc from "recompose"
import component from "utils/component"
import concatToClassNameBy from "utils/concatToClassNameBy"
import propTypes from "utils/propTypes"

const size = ["2x", "3x", "4x"]
const names = ["apps", "arrow-down", "arrow-left", "arrow-right",
  "arrow-up", "back", "bookmark", "caret", "check", "cross",
  "delete", "download", "downward", "edit", "emoji", "flag",
  "forward", "link", "location", "mail", "menu", "message",
  "minus", "more-horiz", "more-vert", "people", "photo", "plus",
  "refresh", "resize-horiz", "resize-vert", "search", "share",
  "shutdown", "stop", "time", "upload", "upward",
]

const concatIcon = r.concat("icon-")

export default
r.pipe(
  component.ofTagClass,
  rc.withProps(concatToClassNameBy(concatIcon, "size")),
  rc.withProps(concatToClassNameBy(concatIcon, "name")),
  rc.setPropTypes(propTypes({
    name: ["oneOf.", ...names],
    size: ["oneOf", ...size],
    className: "string",
    style: "object",
  })),
)("i", "icon")
