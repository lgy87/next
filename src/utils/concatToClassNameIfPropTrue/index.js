import concatToClassNameIf from "utils/concatToClassNameIf"

function concatToClassNameIfPropTrue (klass, propName, props) {
  return concatToClassNameIf(klass, r.propEq(propName, true), props)
}

export default r.curry(concatToClassNameIfPropTrue)