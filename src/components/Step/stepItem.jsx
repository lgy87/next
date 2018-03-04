import A from "components/A"
import PT from "prop-types"

const attachTooltip = function ({ tooltip, text, children, ...rest }) {
  const tooltipText = tooltip || text || children

  if (tooltip !== false && tooltipText) {
    return {
      className: "tooltip",
      "data-tooltip": tooltipText,
    }
  }
}

const Link = r.compose(
  rc.withProps(attachTooltip),
  rc.omitProps(["tooltip"]),
)(A)

const StepItem = ({ active, ...rest }) => (
  <li className={ cx("step-item", { active }) }>
    <Link { ...rest } />
  </li>
)

StepItem.propTypes = {
  text: PT.string,
  active: PT.bool,
  tooltip: PT.oneOfType([
    PT.string,
    PT.bool,
  ])
}

export default StepItem