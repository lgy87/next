const path = require("path")

const PWD    = __dirname
const APP    = path.resolve(`${PWD}/..`)
const SRC    = `${APP}/src`
const DIST   = `${APP}/dist`
const TESTS  = `${APP}/tests`
const UTEST  = `${TESTS}/unit`
const BUILD  = `${APP}/build`
const CONFIG = `${APP}/config.of.webpack`

module.exports = {
  PWD,
  APP,
  SRC,
  DIST,
  TESTS,
  UTEST,
  BUILD,
  CONFIG,
}
