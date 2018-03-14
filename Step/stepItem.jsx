import A from "components/A"
import propTypes from "utils/propTypes"

const StepItem = ({ active, ...rest }) => (
  <li className={ cx("step-item", { active }) }>
    <A { ...rest } />  
  </li>
)

export default rc.setPropTypes(propTypes({
  text: "string",
  active: "bool",
  tooltip: "string",
  tooltipPosition: ["oneOf", "up", "right", "bottom", "left"],
}))(StepItem)