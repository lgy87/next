import concatToClassNameIf from "utils/concatToClassNameIf"
import concatToClassNameIfAllPropsTrue from "utils/concatToClassNameIfAllPropsTrue"
import propTypes from "utils/propTypes"
import createPropTypesBy from "utils/createPropTypesBy"
import findInBy from "utils/findInBy"
import AvatarPresence, {status} from "./avatarPresence"

const size = ["xs", "sm", "lg", "xl"]
const appearance = ["badge"]
const baseClassName = "avatar"

function Avatar ({
  src,
  alt,
  iconSrc,
  iconAlt,
  online,
  busy,
  away,
  offline,
  ...rest
}) {
  const statusObj = {online, busy, away, offline}
  const avatarPresenceVisible = findInBy(r.equals(true), status, statusObj).length > 0

  return (
    <figure {...rest}>
      {
        src && <img {...{src}} {...{alt}} />
      }
      {
        iconSrc && <img src={iconSrc} className="avatar-icon" alt={iconAlt} />
      }
      {
        avatarPresenceVisible && <AvatarPresence {...statusObj} /> 
      }
    </figure>
  )
}

export default r.pipe(
  rc.mapProps(r.omit(size.concat(appearance))),
  rc.withProps(
    concatToClassNameIfAllPropsTrue(
      r.concat(`${baseClassName}-`),
      size,
    )
  ),
  rc.renameProp("badge", "data-badge"),
  rc.withProps(
    concatToClassNameIf(
      "badge",
      r.has("badge"),
    ),
  ),
  rc.renameProp("text", "data-initial"),
  rc.withProps({ "className": baseClassName }),
  rc.setDisplayName("Avatar"),
  rc.setPropTypes(propTypes({
    ...createPropTypesBy(
      r.always("bool"),
      size.concat(appearance, status),
    ),
    src: "string",
    alt: "string",
    iconSrc: "string",
    iconAlt: "string",
    badge: ["oneOfType", "string", "number"],
    text: "string",
    children: "node",
    className: "string",
    style: "object",
  })),
)(Avatar)