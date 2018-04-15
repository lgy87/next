function mergePropsToStyle (propNames, props) {
  const {style} = props
  const picked = r.pick(propNames, props)

  return {
    style: r.merge(picked, style)
  }
}

export default r.curry(mergePropsToStyle)