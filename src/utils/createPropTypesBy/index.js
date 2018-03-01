import mapKeys from "utils/lodash/mapKeys"
import mapValues from "utils/lodash/mapValues"

function createPropTypesBy (typeCreator, array) {
  return array
    |> mapKeys(_.identity)
    |> mapValues(typeCreator)
}

export default r.curry(createPropTypesBy)