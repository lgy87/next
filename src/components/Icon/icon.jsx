import {addPropTypesTo_} from "utils/addTo_"
import patchClassName from "HOCs/patchClassName"
import attachClassName from "HOCs/attachClassName"
import removePropsIf from "HOCs/removePropsIf"
import createPropTypesBy from "utils/createPropTypesBy"
import kebabCase from "lodash/fp/kebabCase"

const size = ["x2", "x3", "x4"]
const iconNames = [
  "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp",
  "back", "bookmark", "caret", "check", "cross", "delete",
  "download", "downward", "edit", "emoji", "flag", "forward",
  "link", "location", "mail", "menu", "message", "minus",
  "moreHoriz", "moreVert", "people", "photo", "plus", "refresh",
  "resizeHoriz", "resizeVert", "search", "share", "shutdown",
  "stop", "time", "upload", "upward"
]
const baseClassName = "icon"

const Icon = props => <i {...props} />

export default r.pipe(
  addPropTypesTo_({
    ...createPropTypesBy(
      r.always("bool"),
      iconNames.concat(size),
    ),
    className: "string",
    style: "object",
  }),
  removePropsIf({
    list: size.concat(iconNames),
  }),
  attachClassName(baseClassName),
  patchClassName({
    list: iconNames,
    transformer: r.pipe(
      r.concat(`${baseClassName}-`),
      kebabCase,
    ),
  }),
  patchClassName({
    list: size,
    transformer: r.pipe(
      r.reverse,
      r.concat(`${baseClassName}-`),
    ), 
  }),
)(Icon)
