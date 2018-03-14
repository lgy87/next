import component from "utils/component"
import propTypes from "utils/propTypes"
import BreadcrumbItem from "./breadcrumbItem"

const baseClassName = "breadcrumb"

export default
component
  .of("ul")
  .withProps(addStepItems)
  .withProps({ className: baseClassName })
  .setDisplayName("Breadcrumb")
  .setPropTypes(propTypes({
    itesm: "array",
  }))
  .init()

function addStepItems ({ items, children, className, style, ...rest }) {
  if (items?.length) {
    return {
      children: items.map(
        (item, index) => <BreadcrumbItem { ...item } { ...rest } key={ item.id || index } />
      ),
    }
  }
}
