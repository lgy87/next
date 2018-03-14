/*
<Component tooltip="text" tooltipPosition="right" />
  =>
<Component className="tooltip tooltip-right" data-tooltip="text" />
*/
export default function tooltipMapper ({ className, tooltip, tooltipPosition, ...rest }) {
  return {
    ...rest,
    className: cx(
      className,
      {
        tooltip,
        [`tooltip-${tooltipPosition}`]: tooltipPosition,
      },
    ),
    "data-tooltip": tooltip,
  }
}