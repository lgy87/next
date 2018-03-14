import findInBy from "utils/findInBy"

function concatToClassNameIfAllPropsTrue (
  classCreator,
  propNames,
  { className = "", ...rest }
) {
  const trutyPropNames = findInBy(r.equals(true), propNames, rest)
  const transformed = r.map(classCreator, trutyPropNames)

  return {
    ...rest,
    className: r.prepend(className, transformed).join(" "),
  } 
}

export default r.curry(concatToClassNameIfAllPropsTrue)