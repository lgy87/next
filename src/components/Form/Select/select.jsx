import rc from "recompose"
import createFormElement from "../createFormElement"
import Option from "./option"

const behavior = ["multiple"]

const Select = createFormElement({
  tag: "select",
})

export default
rc.withProps(addOptions)(Select)

function addOptions ({options: items, children, ...rest}) {
  if (items?.length) {
    return {
      children: items.map(
        (item, index) => <Option {...item} {...rest} key={item.id || index} />
      ),
    }
  }
}
