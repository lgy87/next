import _ from "lodash/fp"

const mapKeys = uncap(_.mapKeys)
const mapValues = uncap(_.mapValues)

function createPropTypesBy (typeCreator, array) {
  return array
    |> _.mapKeys(_.identity)
    |> _.mapValues(typeCreator)
}

export default r.curry(createPropTypesBy)

function uncap (hof) {
  return hof.convert({
    cap: false,
  })
}