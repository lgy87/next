/*
 * Guangyao Li
 * 2017/11/12
 * 759646703@qq.com
 */
function attachClassName (klass, Component) {
  return function ({className = "", ...rest}) {
    return (
      <Component
        {...rest}
        className={`${klass} ${className}`}
      />
    )
  }
}

export default r.curry(attachClassName)

