import r from "ramda"

function thread (keys, props) {
  const values = r.props(keys, props)
  const isNotUndefined = r.complement(r.equals)(undefined)

  return {
    [keys[0]]: r.find(isNotUndefined, values),
  }
}

export default r.curry(thread)
