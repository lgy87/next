import impl from "./impl"
import mergePropTypesTo_ from "./merge_"

export default propTypes => Component => {
  const compiled = impl(propTypes)
  return mergePropTypesTo_(compiled)(Component)
}
