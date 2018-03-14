import component from "utils/component"
import propTypes from "utils/propTypes"
import StepItem from "./stepItem"

export default
component
  .of("ul")
  .withProps(addStepItems)
  .withProps({ className: "step" })
  .setPropTypes(propTypes({
    steps: "array",
  }))
  .init()

function addStepItems ({ items, children, ...rest }) {
  if (items?.length) {
    return {
      children: items.map(
        (item, index) => <StepItem { ...item } { ...rest } key={ item.id || index } />
      ),
    }
  }
}
