import r from "ramda"
import findInBy from "utils/findInBy"

function concatToClassNameIfAllPropsTrue (
  classCreator,
  propNames,
  {className, ...rest}
) {
  const trutyPropNames = findInBy(r.equals(true), propNames, rest)
  const transformed = r.map(classCreator, trutyPropNames)
  const classes = r.compose(
    r.join(" "),
    r.uniq,
    r.filter(Boolean),
    r.prepend(className),
  )(transformed)

  return {
    ...rest,
    className: classes,
  }
}

export default r.curry(concatToClassNameIfAllPropsTrue)
