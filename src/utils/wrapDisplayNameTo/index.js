/*
 * Guangyao Li
 * 2018/04/02
 * lgy87@foxmail.com
 */
import r from "ramda"
import rc from "recompose"

function wrapDisplayNameTo (
  WrappedComponent,
  hocName,
  WrapperComponent,
) {
  const displayName = rc.wrapDisplayName(WrappedComponent, hocName)
  return rc.setDisplayName(displayName)(WrapperComponent)
}

export default
r.curry(wrapDisplayNameTo)
