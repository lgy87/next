import A from "components/A"
import propTypes from "utils/propTypes"

const BreadcrumbItem = props => (
  <li className="breadcrumb-item">
    <A { ...props } />  
  </li>
)

export default rc.setPropTypes(propTypes({
  text: "string",
  tooltip: "string",
  tooltipPosition: ["oneOf", "up", "right", "bottom", "left"],
}))(BreadcrumbItem)