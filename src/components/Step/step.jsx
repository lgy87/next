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

function addStepItems ({ steps, ...rest }) {
  if (steps?.length) {
    return {
      children: steps.map((step, index) => <StepItem { ...step } key={ step.id || index } />),
    }
  }
}
