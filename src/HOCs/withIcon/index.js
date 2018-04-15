/*
 * Guangyao Li
 * 2018/04/02
 * lgy87@foxmail.com
 */
import r from "ramda"
import Icon from "components/Icon"
import Loading from "components/Loading"
import wrapDisplayNameTo from "utils/wrapDisplayNameTo"

function withIcon ({
    hocName = "withIcon",
    position = "left",
    name,
    size,
  } = {},
  Component,
) {
  function Proxy (props) {
    const isLoading = r.equals("loading")
    const FormIcon = isLoading(name) ? Loading : Icon

    return (
      <div className={`has-icon-${position}`}>
        <Component {...props} />
        <FormIcon className={`form-icon`} {...{name, size}} />
      </div>
    )
  }

  return wrapDisplayNameTo(Component, hocName, Proxy)
}

export default
r.curryN(2, withIcon)
