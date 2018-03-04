function concatToClassNameIf (klass, pred) {
  return function ({ className, ...rest }) {
    return {
      ...rest,
      className: cx(className, {
        [klass]: pred(rest)
      }),
    }
  }
}

export default r.curry(concatToClassNameIf)