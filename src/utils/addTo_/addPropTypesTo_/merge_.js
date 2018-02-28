/*
 * Guangyao Li
 * 2017/11/11
 * 759646703@qq.com
 */
import addTo_ from "../addTo_"

export default propTypes => Component => {
  const addToComponent = addTo_("propTypes", r.__, Component)

  return r.compose(
    addToComponent,
    r.mergeDeepRight(propTypes),
    r.propOr({}, "propTypes"),
  )(Component)
}
