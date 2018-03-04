function thread (keys, props) {
  const values = r.map(r.prop(r.__, props), keys)
  const rest = r.omit(keys, props)

  return {
    ...rest,
    [keys[0]]: firstDefined(values),
  }
}

export default r.curry(thread)

function firstDefined (array) {
  for (let i = 0; i < array.length; i++) {
    if (r.complement(r.equals)(undefined, array[i])) {
      return array[i]
    }
  }
}