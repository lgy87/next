import Input from "components/Form/Input"
import {
  compose,
  defaultProps,
  withState,
  withHandlers,
} from "recompose"

const InputInCheckbox = compose(
  defaultProps({
    type: "checkbox",
    className: "",
  }),
)(Input)

export default
props => {
  return (
    <label className="form-switch">
      <InputInCheckbox {...props} />
      <i className="form-icon" />
    </label>
  )
}
