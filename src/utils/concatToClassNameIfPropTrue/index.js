import concatToClassNameIf from "utils/concatToClassNameIf"

export default function concatToClassNameIfPropTrue (prop) {
  return concatToClassNameIf(prop, r.propEq(prop, true))
}