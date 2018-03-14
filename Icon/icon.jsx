import createPropTypesBy from "utils/createPropTypesBy"
import kebabCase from "lodash/fp/kebabCase"
import component from "utils/component"
import propTypes from "utils/propTypes"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"

const baseClassName = "icon"
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

export default
component
  .of("i")
  .omitProps(size.concat(iconNames))
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.pipe(
        r.concat(`${baseClassName}-`),
        kebabCase,
      ),
      iconNames,
    )
  )
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.pipe(
        r.reverse,
        r.concat(`${baseClassName}-`),
      ), 
      size,
    )
  )
  .withProps({className: baseClassName})
  .setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      iconNames.concat(size),
    ),
    className: "string",
    style: "object",
  }))
  .init()