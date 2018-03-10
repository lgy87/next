rc.omitProps = rc.omitProps || r.compose(rc.mapProps, r.omit)

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
    if (typeof rc[key] === "function") {
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

function mandatory (arg) {
  throw new Error(`
    [${arg}] is missing!
    you can specify ${arg} like "div", "span" etc.
  `)
}

export default component