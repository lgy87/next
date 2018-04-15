/*
 * Guangyao Li
 * 2017/2/28
 * lgy87@foxmail.com
 */
const modes = require("./modes")
const {defaultMode} = require("./settings")
const r = require("ramda")

const settings = {
  [modes.dev] : "errors-only",
  [modes.prod]: "errors-only",
}

module.exports = r.pipe(
  r.prop(r.__, settings),
  r.defaultTo(r.prop(defaultMode, settings)),
)
