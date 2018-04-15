/*
 * Guangyao Li
 * 2017/11/11
 * lgy87@foxmail.com
 */
import r from "ramda"
import addTo_ from "../addTo_"

export default propTypes => Component => {
  const addToComponent = addTo_("propTypes", r.__, Component)

  return r.compose(
    addToComponent,
    r.mergeDeepRight(propTypes),
    r.propOr({}, "propTypes"),
  )(Component)
}
