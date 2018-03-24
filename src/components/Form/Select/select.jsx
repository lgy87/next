import createFormElement from "../createFormElement"
import {
  withProps,
} from "recompose"
import {pipe} from "ramda"
import Option from "./option"

const behavior = ["multiple"]

const Select = createFormElement({
  tag: "select",
})

export default
withProps(addOptions)(Select)

function addOptions ({options: items, children, ...rest}) {
  if (items?.length) {
    return {
      children: items.map(
        (item, index) => <Option {...item} {...rest} key={item.id || index} />
      ),
    }
  }
}