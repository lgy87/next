/*
 * Guangyao Li
 * 2018/04/01
 * lgy87@foxmail.com
 */
import r from "ramda"
import _ from "lodash/fp"
import findFirstInBy from "utils/findFirstInBy"
import wrapDisplayNameTo from "utils/wrapDisplayNameTo"

function withTooltip ({
    baseClassName = "tooltip",
    hocName = "withTooltip",
  } = {},
  Component,
) {
  function Proxy (props) {
    const candidate = r.map(
      r.concat(baseClassName),
      ["", "Top", "Right", "Bottom", "Left"],
    )

    const position = findFirstInBy(
      r.is(String),
      candidate,
      props,
    )

    if (! position) {
      return <Component {...props} />
    }

    const tooltip = props[position]
    const newProps = r.omit(candidate, props)

    const classes = [props.className, baseClassName]
      |> r.append(_.kebabCase(position))
      |> r.uniq
      |> r.join(" ")
      |> r.trim

    return <Component
      {...newProps}
      className={classes}
      data-tooltip={tooltip}
    />
  }

  return wrapDisplayNameTo(Component, hocName, Proxy)
}

export default
r.curryN(2, withTooltip)
