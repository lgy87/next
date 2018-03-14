const {SRC, UTEST} = require("./dirs")
const modes = require("./modes")
const {defaultMode} = require("./settings")
const r = require("ramda")

const vendors = [
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "redux",
  "redux-actions",
  "redux-logger",
]
exports.vendors = vendors

const settings = {
  [modes.dev]: {
    bundle: [
      "react-hot-loader/patch",
      `${SRC}/entry`,
    ],
  },
  [modes.prod]: {
    bundle: [
      `${SRC}/entry`,
    ],
    vendors,
  },
}

module.exports = r.pipe(
  r.prop(r.__, settings),
  r.defaultTo(r.prop(defaultMode, settings)),
)