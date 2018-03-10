import component from "utils/component"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"

const size = ["sm"]
const baseClassName = "bar"

export default
component
  .of("div")
  .omitProps(size)
  .withProps(addItems)
  .withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat(`${baseClassName}-`),
      size,
    )
  )
  .withProps({ className: baseClassName })
  .setDisplayName("Bar")
  .init()
  
  function addItems ({ items, children, ...rest }) {
    if (items?.length) {
      return {
        children: items.map(
          (item, index) => <BarItem { ...item } { ...rest } key={ item.id || index } />
        ),
      }
    }
  }
  