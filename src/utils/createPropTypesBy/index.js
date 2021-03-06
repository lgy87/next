import r from "ramda"
import mapKeys from "utils/lodash/mapKeys"
import mapValues from "utils/lodash/mapValues"

function createPropTypesBy (typeCreator, array) {
  return array
    |> mapKeys(r.identity)
    |> mapValues(typeCreator)
}

export default r.curry(createPropTypesBy)
