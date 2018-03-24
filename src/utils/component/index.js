import {compose} from "ramda"
import omitProps from "utils/omitProps"
import mandatory from "utils/mandatory"
import * as rc from "recompose"
import r from "ramda"
console.log(rc)
function createComponent (domType = mandatory(domType)) {
  return r.compose(
    rc.withProps({ component: domType }),
    rc.componentFromProp,
  )("component") 
}

function component (domType = mandatory(domType)) {
  if (! new.target) {
    return new component(domType)
  }

  this.value = createComponent(domType)
}

component.of = component

const base = {
  init () {
    return this.value
  }
}

Reflect.setPrototypeOf(component.prototype, new Proxy(base, {
  get (target, key) {
    console.log(key)
    if (typeof rc[key] === "function" || key === "omitProps") {
      return new Proxy (rc[key], {
        apply (target, object, args) {
          object.value = target(...args)(object.value)
          return object
        }
      })
    }

    return target[key]
  }
}))

export default component