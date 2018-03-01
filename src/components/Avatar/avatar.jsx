import {addPropTypesTo_} from "utils/addTo_"
import createPropTypesBy from "utils/createPropTypesBy"
import removePropsIf from "HOCs/removePropsIf"
import mapPropsIf from "HOCs/mapPropsIf"
import attachClassName from "HOCs/attachClassName"
import patchClassName from "HOCs/patchClassName"
import findInBy from "utils/findInBy"

const status = ["online", "busy", "away", "offline"]
const size = ["xs", "sm", "lg", "xl"]
const appearance = ["badge"]
const baseClassName = "avatar"

const Presence = props => <i {...props} />

const AvatarPresence = r.pipe(
  addPropTypesTo_({
    ...createPropTypesBy(
      r.always("bool"),
      status,
    ),
    className: "string",
    style: "object",
  }),  
  removePropsIf({
    list: status,
    pred: r.T,
  }),
  attachClassName("avatar-presence"),
  patchClassName({
    list: status,
  }),
)(Presence)

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
  addPropTypesTo_({
    ...createPropTypesBy(
      r.always("bool"),
      size.concat(appearance, status),
    ),
    src: "string",
    alt: "string",
    iconSrc: "string",
    iconAlt: "string",
    badge: ["oneOfType", "string", "number", "bool"],
    badgeValue: ["oneOfType", "string", "number"],
    text: "string",
    children: "node",
    className: "string",
    style: "object",
  }),  
  removePropsIf({
    list: size.concat(appearance),
  }),
  attachClassName(baseClassName),
  patchClassName({
    list: size,
    transformer: r.concat(`${baseClassName}-`),
  }),
  patchClassName({
    list: appearance,
  }),
  mapPropsIf({
    list: ["text"],
    pred: r.T,
    transformer: value => ({"data-initial": value})
  }),
  mapPropsIf({
    list: ["badgeValue"],
    pred: r.T,
    transformer: value => ({"data-badge": value})
  }),
  mapPropsIf({
    list: ["badge"],
    pred: r.anyPass([r.is(Number), r.is(String)]),
    transformer: value => ({
      badge: true,
      "data-badge": value,
    })
  }),
)(Avatar)